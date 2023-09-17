export const faqQuestions: Question[] = [
    {
        question: "Question: What do you want to ask? Example: What are the common issues faced when setting up a CI/CD pipeline and how can they be resolved?",
        answerPrefix: "Question: ",
    },
    {
        question: "Answer: How do you want the answer to contain? Example: Describe the common issues such as integration problems, environment inconsistencies, etc., and provide solutions for each.",
        answerPrefix: "Answer: ",
    },
]

export const faqOption: PromptOption = {
    name: "FAQ",
    questions: faqQuestions,
    exampleText: "Question\nAnswer",
    commandCode: "f",
}