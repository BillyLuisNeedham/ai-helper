import { guideOption } from "../../data/PromptOptions/guideQuestions";
import { appEngine, getInitialString, getPromptOptionText } from "./AppEngine";
import { swissOption } from "../../data/PromptOptions/swissQuestions";

// TODO build all tests
describe('appEngine', () => {

    it('should return the select phase state when status is "initial"', () => {
      // Arrange
      const state: AppEngineState = {
        status: "initial",
        options: [
            guideOption,
            swissOption
        ]
      };
  
      // Act
      const result = appEngine(state, null) as AppEngineSelectPhase
  
      // Assert
      expect(result.status).toEqual("select phase");
      expect(result.displayString).toEqual(getInitialString(state));
      expect(result.displayState.status).toEqual("in progress");
      expect(result.displayState.options).toEqual(state.options);
    });


});
