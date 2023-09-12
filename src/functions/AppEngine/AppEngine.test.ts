import { guideOption } from "../../data/PromptOptions/guideQuestions";
import { appEngine } from "./AppEngine";
import { swissOption } from "../../data/PromptOptions/swissQuestions";

// TODO build all tests
describe('appEngine', () => {

    // Test that the appEngine function returns the expected state when the status is "initial".
    it('should return the expected state when status is "initial"', () => {
      // Arrange
      const state: AppEngineState = {
        status: "initial",
        displayString: "",
        options: [
            guideOption,
            swissOption
        ]
      };
  
      // Act
      const result = appEngine(state, null);
  
      // Assert
      expect(result.status).toBe("select phase");
      expect(result.displayString).toBe("Option 1 prompt select by typing 1\nExample 1\n\nOption 2 prompt select by typing 2\nExample 2");
      expect(result.displayState.status).toBe("in progress");
      expect(result.displayState.options).toEqual([
        {
          name: "Option 1",
          commandCode: "1",
          exampleText: "Example 1",
        },
        {
          name: "Option 2",
          commandCode: "2",
          exampleText: "Example 2",
        },
      ]);
    });


});
