export function PromptEngine(state: PromptState, answer: string): PromptState {
  if (state.status === "complete") {
    return state;
  }

  const index = state.answers.length;
  const question = state.questions[index];
  const answerWithPrefix = question.answerPrefix + answer;
  const answers = [...state.answers, answerWithPrefix];
  
  if (answers.length === state.questions.length) {
    const promptComplete: PromptComplete = {
      status: "complete",
      prompt: convertAnswersToPrompt(answers),
    };
    return promptComplete;
  }
  
  const promptInProgress: PromptInProgress = {
    ...state,
    answers,
  };

  return promptInProgress;
}
function convertAnswersToPrompt(answers: string[]): string {
  return answers.join("\n");
}
