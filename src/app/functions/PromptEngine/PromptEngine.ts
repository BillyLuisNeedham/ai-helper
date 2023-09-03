export function PromptEngine(
  state: PromptInProgress,
  answer: string
): PromptInProgress | PromptComplete {
  const index = state.answers.length;
  const question = state.questions[index];
  const answerWithPrefix = question.answerPrefix + answer;
  const promptInProgress: PromptInProgress = {
    ...state,
    answers: [...state.answers, answerWithPrefix],
  };

  return promptInProgress;
}
