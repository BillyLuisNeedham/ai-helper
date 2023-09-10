import { PromptEngine } from "../PromptEngine/PromptEngine";
import { mockQuestions } from "../PromptEngine/PromptEngine.test";
import { GetDisplayText } from "./GetDisplayText";

describe("GetDisplayText", () => {
  test("GIVEN a PromptState is PromptInProgress WHEN there are no answers THEN returns first question", () => {
    const state: PromptState = inProgressBaseState;
    const result = GetDisplayText(state);

    expect(result).toEqual(mockQuestions[0].question);
  });

  test("GIVEN a PromptState is PromptInProgress WHEN there are answers THEN returns the question then answer of the question until it reaches the last question to be answered", () => {
    const answers = ["hello", "world"];
    const expectedState: string = `${mockQuestions[0].question}\n\n${mockQuestions[0].answerPrefix}${answers[0]}\n\n${mockQuestions[1].question}\n\n${mockQuestions[1].answerPrefix}${answers[1]}\n\n${mockQuestions[2].question}`;

    const stateInitial: PromptState = PromptEngine(
      inProgressBaseState,
      answers[0]
    );
    const stateFinal: PromptState = PromptEngine(stateInitial, answers[1]);
    const result = GetDisplayText(stateFinal);

    expect(result).toEqual(expectedState);
  });
});

const inProgressBaseState: PromptInProgress = {
  status: "in progress",
  questions: mockQuestions,
  answers: [],
};


describe('GetDisplayText', () => {
});
