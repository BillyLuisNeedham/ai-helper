import { PromptEngine } from "../PromptEngine/PromptEngine";
import { mockQuestions } from "../PromptEngine/PromptEngine.test";
import { GetDisplayText } from "./GetDisplayText";


describe('GetDisplayText', () => {
    // Test that the GetDisplayText function returns the first question when the PromptState is PromptInProgress and there are no answers
    it('should return the first question when there are no answers', () => {
      const state: PromptState = inProgressBaseState;
      const result = GetDisplayText(state);

      expect(result).toEqual(mockQuestions[0].question);
    });

    // Test that the GetDisplayText function returns an empty string when the PromptState is PromptInProgress but there are no questions
    it('should return an empty string when there are no questions', () => {
      const state: PromptState = {
        status: "in progress",
        questions: [],
        answers: []
      };
      const result = GetDisplayText(state);

      expect(result).toEqual("");
    });


    // Test that the GetDisplayText function returns the question and answer of the question until it reaches the last question to be answered when the PromptState is PromptInProgress and there are answers
    it('should return the question and answer of the question until it reaches the last question to be answered when there are answers', () => {
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

    // Test that the GetDisplayText function returns the question and answer of the question until it reaches the last question to be answered when the PromptState is PromptInProgress and there are answers
    it('should return the question and answer of the question until it reaches the last question to be answered when there are answers', () => {
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
