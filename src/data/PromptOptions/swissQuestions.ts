export const swissQuestions: Question[] = [
    {
        question: '1st Step:\nGive it a role. "You are Spartacus, a pro copywriter"',
        answerPrefix: "Role: ",
    },
    {
        question: '2nd Step:\nDefine its job "Your job is to write copy for online media brands"',
        answerPrefix: "Job: ",
    },
    {
        question: 'Third step:\nGive the AI control: "Now ask me all the questions that you need to [your idea here]"',
        answerPrefix: "",
    }
]

export const swissOption: PromptOption = {
    name: "Swiss Army Prompt",
    questions: swissQuestions,
    exampleText: "Role\nJob\nAsk me all the questions you need to ...",
    commandCode: "s",
}