import { displayOptions } from "./DisplayOptions";

describe('displayOptions', () => {

    // Test that the function 'displayOptions' returns an object with status "in progress" and the options array when the command is null.
    it('should return an object with status "in progress" and the options array when the command is null', () => {
      // Arrange
      const options: PromptOption[] = [
        { commandCode: "A", questions: ["Question 1", "Question 2"] },
        { commandCode: "B", questions: ["Question 3", "Question 4"] },
      ];
      const command = null;

      // Act
      const result = displayOptions(options, command);

      // Assert
      expect(result).toEqual({
        status: "in progress",
        options: options,
      });
    });


});
