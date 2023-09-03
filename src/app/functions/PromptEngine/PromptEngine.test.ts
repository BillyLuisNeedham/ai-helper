import { PromptEngine } from "./PromptEngine";

describe("PromptEngine", () => {
  test("GIVEN the answers are not complete WHEN a new answer is inserted and at least one more question is to be answered THEN appends answer to the existing answers with the answerPrefix from the question with the matching index", () => {
    const state: PromptInProgress = {
      status: "in progress",
      questions: questions,
      answers: [],
    };
    const answer = "John";
    const expectedState: PromptInProgress = {
      status: "in progress",
      questions: questions,
      answers: ["Name: John"],
    };

    const actualState = PromptEngine(state, answer);

    expect(actualState).toEqual(expectedState);
  });
});

const questions = [
  { question: "What is your name?", answerPrefix: "Name: " },
  { question: "What is your age?", answerPrefix: "Age: " },
  { question: "What is your gender?", answerPrefix: "Gender: " },
]
