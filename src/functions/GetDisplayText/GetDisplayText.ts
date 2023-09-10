export function GetDisplayText(state: PromptState) {
  if (state.status === "in progress") {
    if (state.answers.length === 0) {
      return state?.questions[0]?.question ?? "";
    } else {
      const amountOfAnswers = state.answers.length;

      let displayText = "";

      for (let i = 0; i < amountOfAnswers; i++) {
        displayText += `${state.questions[i].question}\n\n${state.answers[i]}\n\n`;

        if (i === amountOfAnswers - 1) {
          displayText += `${state.questions[i + 1].question}`;
        }
      }

      return displayText;
    }
  }
  if (state.status === "complete") {
    return state.prompt;
  }
  return "";
}
