export const recommendationsQuestions: Question[] = [
    {
        question: "Task: What do you want to recommend? Example: Recommend online courses for learning TypeScript.",
        answerPrefix: "Task: ",
    },
    {
        question: "Recommendations: How do you want to recommend it? Example: Suggest a list of reputable platforms and courses where the user can learn TypeScript, along with a brief description of each.",
        answerPrefix: "Recommendations: ",
    }
]

export const recommendationsOption: PromptOption = {
    name: "Recommendations",
    questions: recommendationsQuestions,
    exampleText: "Task\nRecommendations",
    commandCode: "r",
}