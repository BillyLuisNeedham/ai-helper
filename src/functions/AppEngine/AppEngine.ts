import { displayOptions } from "../DisplayOptions/DisplayOptions";
import { GetPromptStateDisplayText } from "../GetPromptStateDisplayText/GetPromptStateDisplayText";
import { PromptEngine } from "../PromptEngine/PromptEngine";

export function appEngine(
  state: AppEngineState,
  command: string | null
): AppEngineState {
  if (state.status === "initial") {
    return onInitial(state);
  }

  if (state.status === "select phase") {
    return onSelectPhase(state, command);
  }

  if (state.status === "build phase") {
    return onBuildPhase(state, command);
  }

  return state;
}

function onBuildPhase(
  state: AppEngineBuildPhase,
  command: string | null
): AppEngineState {
  if (command === null) {
    return state;
  }
  const promptState: PromptState = PromptEngine(state.promptState, command);

  if (promptState.status === "complete") {
    return {
        displayString: GetPromptStateDisplayText(promptState),
        status: "complete",
        prompt: promptState.prompt
    }
  } else {
    return state
  }
}

function onSelectPhase(
  state: AppEngineSelectPhase,
  command: string | null
): AppEngineState {
  const displayState = displayOptions(state.displayState.options, command);
  if (displayState.status === "complete") {
    const promptState: PromptInProgress = {
      status: "in progress",
      questions: displayState.selectedQuestions,
      answers: [],
    };
    return {
      displayString: GetPromptStateDisplayText(promptState),
      status: "build phase",
      promptState,
    };
  } else {
    return state;
  }
}

function onInitial(state: AppEngineInitialState): AppEngineState {
  return {
    displayString: getInitialString(state),
    status: "select phase",
    displayState: {
      status: "in progress",
      options: state.options,
    },
  };
}

function getInitialString(state: AppEngineInitialState): string {
  return state.options
    .map((option) => getPromptOptionText(option))
    .join("\n\n");
}

function getPromptOptionText(option: PromptOption): string {
  return `${option.name} prompt select by typing ${option.commandCode}\n${option.exampleText}`;
}
