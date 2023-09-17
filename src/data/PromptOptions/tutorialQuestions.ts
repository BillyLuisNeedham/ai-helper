export const tutorialQuestions: Question[] = [
    {
        question: "Task: What tutorial do you want to write? Example: Create a tutorial on building a simple Android app using Kotlin.",
        answerPrefix: "Task: ",
    },
    {
        question: "Tutorial: How do you want to write the tutorial? Example: Detail a step-by-step guide that walks through the process of creating a simple app, from setting up the environment to deploying the app.",
        answerPrefix: "Tutorial: ",
    }
]

export const tutorialOption: PromptOption = {
    name: "Tutorial",
    questions: tutorialQuestions,
    exampleText: "Task\nTutorial",
    commandCode: "t",
}