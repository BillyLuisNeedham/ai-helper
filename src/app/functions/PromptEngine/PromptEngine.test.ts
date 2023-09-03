import { PromptEngine } from "./PromptEngine";

describe("PromptEngine", () => {
  test("GIVEN the answers are not complete WHEN a new answer is inserted and at least one more question is to be answered THEN appends answer to the existing answers with the answerPrefix from the question with the matching index", () => {
    const state: PromptInProgress = emptyPrompt;
    const answer = "John";
    const expectedState: PromptInProgress = {
      status: "in progress",
      questions: questions,
      answers: ["Name: John"],
    };

    const actualState = PromptEngine(state, answer);

    expect(actualState).toEqual(expectedState);
  });

  test("GIVEN the answers are not complete WHEN a new answer is inserted and no more questions are to be answered THEN returns all of the answers as a prompt AND sets the status to 'complete'", () => {
    const state: PromptInProgress = emptyPrompt;
    const answer1 = "John";
    const answer2 = "30";
    const answer3 = "Male";
    const expectedState: PromptComplete = {
      status: "complete",
      prompt: "Name: John\nAge: 30\nGender: Male",
    };

    const state1 = PromptEngine(state, answer1);
    const state2 = PromptEngine(state1, answer2);
    const actualState = PromptEngine(state2, answer3);

    expect(actualState).toEqual(expectedState);
  });

  test("GIVEN the answers are complete WHEN a new answer is inserted THEN returns the state unchanged", () => {
    const state: PromptComplete = {
      status: "complete",
      prompt: "Name: John\nAge: 30\nGender: Male",
    };
    const answer = "John";
    const expectedState = state;

    const actualState = PromptEngine(state, answer);

    expect(actualState).toEqual(expectedState);
  });
});

const questions = [
  { question: "What is your name?", answerPrefix: "Name: " },
  { question: "What is your age?", answerPrefix: "Age: " },
  { question: "What is your gender?", answerPrefix: "Gender: " },
];

const emptyPrompt: PromptInProgress = {
  status: "in progress",
  questions: questions,
  answers: [],
};
