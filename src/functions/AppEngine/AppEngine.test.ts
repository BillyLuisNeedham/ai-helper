import { guideOption } from "../../data/PromptOptions/guideQuestions";
import { appEngine, getInitialString, getPromptOptionText } from "./AppEngine";
import { swissOption } from "../../data/PromptOptions/swissQuestions";
import { GetPromptStateDisplayText } from "../GetPromptStateDisplayText/GetPromptStateDisplayText";
import { displayOptions } from "../DisplayOptions/DisplayOptions";

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


    // Returns the build phase state when status is "select phase" and command is valid
    it('should return the build phase state when status is "select phase" and command is valid', () => {
      // Arrange
      const promptOptions = [
        guideOption,
         swissOption
       ]
      const state: AppEngineSelectPhase = {
        status: "select phase",
        displayString: "Select a phase",
        displayState: {
          status: "in progress",
          options: promptOptions
        }
      };
      const command = guideOption.commandCode;
      const expectedPromptState: PromptInProgress = {
        status: "in progress",
        questions: guideOption.questions,
        answers: [],
      }

      // Act
      const result = appEngine(state, command) as AppEngineBuildPhase;

      // Assert
      expect(result.status).toEqual("build phase");
      expect(result.displayString).toEqual(GetPromptStateDisplayText(expectedPromptState));
      expect(result.promptState.status).toEqual("in progress");
      expect(result.promptState.questions).toEqual(state.displayState.options[0].questions);
      expect(result.promptState.answers).toEqual([]);
    });
    

    // Returns the build phase state when status is "build phase" and command is valid
    it('should return the build phase state when status is "build phase" and command is valid and the prompt is not complete', () => {
      // TODO fix this test
      // // Arrange
      // const promptOptions = [
      //   guideOption,
      //   swissOption
      // ];
      // const state: AppEngineBuildPhase = {
      //   status: "build phase",
      //   displayString: "Build phase",
      //   promptState: {
      //     status: "in progress",
      //     questions: guideOption.questions,
      //     answers: []
      //   }
      // };
      // const command = "validCommand";
      // const expectedPromptState: PromptState = {
      //   status: "complete",
      //   prompt: guideOption.prompt,
      //   answers: []
      // };

      // // Act
      // const result = appEngine(state, command) as AppEngineState;

      // // Assert
      // expect(result.status).toEqual("complete");
      // expect(result.displayString).toEqual(GetPromptStateDisplayText(expectedPromptState));
      // expect(result.prompt).toEqual(guideOption.prompt);
    });


});
