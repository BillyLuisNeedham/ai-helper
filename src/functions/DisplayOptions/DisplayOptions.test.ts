import { guideOption } from "../../data/PromptOptions/guideQuestions";
import { displayOptions } from "./DisplayOptions";
import { swissOption } from "../../data/PromptOptions/swissQuestions";

describe("displayOptions", () => {
  // Test that the function 'displayOptions' returns an object with status "in progress" and the options array when the command is null.
  it('should return an object with status "in progress" and the options array when the command is null', () => {
    // Arrange
    const options: PromptOption[] = [guideOption, swissOption];
    const command = null;

    // Act
    const result = displayOptions(options, command);

    // Assert
    expect(result).toEqual({
      status: "in progress",
      options: options,
    });
  });

  // Test that the function 'displayOptions' returns an object with status "complete" and the selected questions array when a valid command is passed.
  it('should return an object with status "complete" and the selected questions array when a valid command is passed', () => {
    const testRounds = [
      {
        command: guideOption.commandCode,
        expected: guideOption.questions,
      },
      {
        command: swissOption.commandCode,
        expected: swissOption.questions,
      },
    ];

    testRounds.forEach((round) => {
      // Arrange
      const options: PromptOption[] = [guideOption, swissOption];
      const command = round.command;

      // Act
      const result = displayOptions(options, command);

      // Assert
      expect(result).toEqual({
        status: "complete",
        selectedQuestions: round.expected,
      });
    });
  });

  // Test that the function 'displayOptions' returns an object with status "in progress" and the options array when an invalid command is passed.
  it('should return an object with status "in progress" and the options array when an invalid command is passed', () => {
    // Arrange
    const options: PromptOption[] = [guideOption, swissOption];
    const command = "invalidCommand";

    // Act
    const result = displayOptions(options, command);

    // Assert
    expect(result).toEqual({
      status: "in progress",
      options: options,
    });
  });
});
