export const comparisonQuestions: Question[] = [
    {
        question: "Task: What do you want to compare? Example: Compare SQL and NoSQL databases for handling large datasets.",
        answerPrefix: "Task: ",
    },
    {
        question: "Comparison: How do you want them to be compared? Example: Provide a detailed comparison considering factors like performance, scalability, and structure.",
        answerPrefix: "Comparison: ",
    }
]

export const comparisonOption: PromptOption = {
    name: "Comparison",
    questions: comparisonQuestions,
    exampleText: "Task\nComparison",
    commandCode: "c",
}