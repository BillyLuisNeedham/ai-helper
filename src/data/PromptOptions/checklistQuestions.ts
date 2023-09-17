export const checklistQuestions: Question[] = [

    {
        question: "Task: What do you want to do? Example: List down the essential security best practices for Android development",
        answerPrefix: "Task: ",
    },
    {
        question: "Checklist: What do you need included in your checklist? Example: Detail a checklist that includes practices such as secure coding, encryption, and regular updates to mitigate vulnerabilities.",
        answerPrefix: "Checklist: ",
    }
]

export const checklistOption: PromptOption = {
    name: "Checklist",
    questions: checklistQuestions,
    exampleText: "Task\nChecklist",
    commandCode: "c",
}