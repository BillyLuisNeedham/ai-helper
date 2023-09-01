interface Question {
    question: string,
    answerPrefix: string,
}

interface PromptState {
    questions: Array<Question>,
    answers: Array<string>,
}