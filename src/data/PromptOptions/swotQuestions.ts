export const swotQuestions: Question[] = [
    {
        question: "Strength: What are the strengths of [your answer]? Example: What are the strengths of using Kotlin for backend development?",
        answerPrefix: "Strength: What are the strengths of ",
    },
    {
        question: "Weakness: Can you list the weaknesses associated with [your answer]? Example: Can you list the weaknesses associated with using TypeScript for a large-scale application?",
        answerPrefix: "Weakness: Can you list the weaknesses associated with ",
    },
    {
        question: "Opportunity: What are the opportunities associated with [your answer]? Example: What are the opportunities associated with using React Native for mobile development?",
        answerPrefix: "Opportunity: What are the opportunities associated with ",
    },
    {
        question: "Threat: What threats should be considered when [your answer]? Example:  What threats should be considered when using open-source software components?",
        answerPrefix: "Threat: What threats should be considered when ",
    },
]

export const swotOption: PromptOption = {
    name: "SWOT",
    questions: swotQuestions,
    exampleText: "Strength\nWeakness\nOpportunity\nThreat",
    commandCode: "w",
}