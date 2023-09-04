export function GetDisplayText(state: PromptState) {
  if (state.status === "in progress") {
    if (state.answers.length === 0) {
      return state.questions[0].question;
    } else {
      const amountOfAnswers = state.answers.length;

      let displayText = "";

      for (let i = 0; i < amountOfAnswers; i++) {
        displayText += `${state.questions[i].question}\n\n${state.questions[i].answerPrefix}${state.answers[i]}\n\n`;

        displayText += `${state.questions[i + 1].question}`;
      }
    }
  }
  return "";
}
