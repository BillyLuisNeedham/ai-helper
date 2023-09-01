import { PromptEngine } from "./PromptEngine";

describe("PromptEngine", () => {
  test("appends answer to the existing answers with the answerPrefix from the question with the matching index", () => {
    const state: PromptState = {
      questions: [
        { question: "What is your name?", answerPrefix: "Name: " },
        { question: "What is your age?", answerPrefix: "Age: " },
      ],
      answers: ["John"],
    };
    const answer = "30";
    const expectedState: PromptState = {
      questions: [
        { question: "What is your name?", answerPrefix: "Name: " },
        { question: "What is your age?", answerPrefix: "Age: " },
      ],
      answers: ["John", "30"],
    };
    const actualState = PromptEngine(state, answer);
    expect(actualState).toEqual(expectedState);
  });
});
