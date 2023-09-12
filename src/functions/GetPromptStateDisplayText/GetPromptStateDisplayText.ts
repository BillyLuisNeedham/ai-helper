/**
 * Returns the display text based on the given `PromptState` object.
 * @param state - The `PromptState` object that contains the status, questions, and answers.
 * @returns The formatted display text based on the `PromptState` object.
 */
export function GetPromptStateDisplayText(state: PromptState): string {
  if (state.status === "in progress") {
    if (state.answers.length === 0) {
      return state?.questions[0]?.question ?? "";
    } else {
      let displayText = "";

      state.answers.forEach((answer, index) => {
        displayText += `${answer}\n\n`;

        if (index === state.answers.length - 1) {
          displayText += `${state.questions[index + 1].question}`;
        }
      });

      return displayText;
    }
  } else if (state.status === "complete") {
    return state.prompt;
  } else {
    return "";
  }
}
