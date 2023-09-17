export const scenarioAnalysisQuestions: Question[] = [
    {
        question: "Scenario: What scenario do you want to analyze? Example: What would be the implications of migrating a monolithic architecture to a serverless architecture?",
        answerPrefix: "Scenario: ",
    },
    {
        question: "Analysis: How do you want to analyze the scenario? Example: Discuss potential benefits and drawbacks, considering factors like scalability, maintenance, and costs",
        answerPrefix: "Analysis: ",
    },
]

export const scenarioAnalysisOption: PromptOption = {
    name: "Scenario Analysis",
    questions: scenarioAnalysisQuestions,
    exampleText: "Scenario\nAnalysis",
    commandCode: "a",
}