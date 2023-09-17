import { displayOptions } from "../DisplayOptions/DisplayOptions"
import { GetPromptStateDisplayText } from "../GetPromptStateDisplayText/GetPromptStateDisplayText"
import { PromptEngine } from "../PromptEngine/PromptEngine"
import { getWelcomeMessage } from "../WelcomeMessage/WelcomeMessage"

export function appEngine(
  state: AppEngineState,
  command: string | null
): AppEngineState {
  const formattedCommand = command?.trim().toLowerCase() ?? null

  if (state.status === "initial") {
    return onInitial(state)
  }

  if (state.status === "select phase") {
    return onSelectPhase(state, formattedCommand)
  }

  if (state.status === "build phase") {
    return onBuildPhase(state, formattedCommand)
  }

  return state
}

function onBuildPhase(
  state: AppEngineBuildPhase,
  command: string | null
): AppEngineState {
  if (command === null) {
    return state
  }
  const promptState: PromptState = PromptEngine(state.promptState, command)

  if (promptState.status === "complete") {
    return {
      displayString: GetPromptStateDisplayText(promptState),
      status: "complete",
      prompt: promptState.prompt,
    }
  } else {
    return {
      displayString: GetPromptStateDisplayText(promptState),
      status: "build phase",
      promptState,
    }
  }
}

function onSelectPhase(
  state: AppEngineSelectPhase,
  command: string | null
): AppEngineState {
  const displayState = displayOptions(state.displayState.options, command)
  if (displayState.status === "complete") {
    const promptState: PromptInProgress = {
      status: "in progress",
      questions: displayState.selectedQuestions,
      answers: [],
    }
    return {
      displayString: GetPromptStateDisplayText(promptState),
      status: "build phase",
      promptState,
    }
  } else {
    return state
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
  }
}

export function getInitialString(state: AppEngineInitialState): string {
  const welcomeMessage = getWelcomeMessage()

  const options = state.options
    .map((option) => getPromptOptionText(option))
    .join("\n\n")

  return `${welcomeMessage}\n\n${options}`
}

export function getPromptOptionText(option: PromptOption): string {
  return `${option.name} prompt select by typing ${option.commandCode}\n${option.exampleText}`
}
