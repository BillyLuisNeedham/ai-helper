export const explainerQuestions: Question[] = [
    {
        question: "Concept: What concept do you want to be explained? Example: Explain the concept of quantum computing to a software engineer.",
        answerPrefix: "Concept: ",
    },
    {
        question: "Explanation: How do you want the concept to be explained? Example: Offer a detailed explanation that breaks down the complex concept into more understandable terms, using analogies if necessary.",
        answerPrefix: "Explanation: ",
    }
]

export const explainerOption: PromptOption = {
    name: "Explainer",
    questions: explainerQuestions,
    exampleText: "Concept\nExplanation",
    commandCode: "x",
}