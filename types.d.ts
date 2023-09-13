interface Question {
  question: string;
  answerPrefix: string;
}

interface PromptInProgress {
  status: "in progress";
  questions: Array<Question>;
  answers: Array<string>;
}

interface PromptComplete {
  status: "complete";
  prompt: string;
}

type PromptState = PromptInProgress | PromptComplete;

interface PromptOption {
  name: string;
  questions: Array<Question>;
  exampleText: string;
  commandCode: string;
}

type DisplayState = DisplayOptionsInProgress | DisplayOptionsComplete;

interface DisplayOptionsInProgress {
  status: "in progress";
  options: Array<PromptOption>;
}

interface DisplayOptionsComplete {
  status: "complete";
  selectedQuestions: Array<Question>;
}

type AppEngineState =
  | AppEngineInitialState
  | AppEngineSelectPhase
  | AppEngineBuildPhase
  | AppEngineComplete;

interface AppEngineInitialState {
  displayString?: string;
  status: "initial";
  options: Array<PromptOption>;
}

interface AppEngineSelectPhase {
  displayString: string;
  status: "select phase";
  displayState: DisplayOptionsInProgress;
}

interface AppEngineBuildPhase {
  displayString: string;
  status: "build phase";
  promptState: PromptInProgress;
}

interface AppEngineComplete {
  displayString: string;
  status: "complete";
  prompt: string;
}
