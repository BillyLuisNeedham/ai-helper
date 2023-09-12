interface Question {
    question: string,
    answerPrefix: string,
}

interface PromptInProgress {
    status: "in progress",
    questions: Array<Question>,
    answers: Array<string>,
}

interface PromptComplete {
    status: "complete",
    prompt: string
}

type PromptState = PromptInProgress | PromptComplete;

interface PromptOption {
    name: string,
    questions: Array<Question>,
    exampleText: string,
    commandCode: string,
}