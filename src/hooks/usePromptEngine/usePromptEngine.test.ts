import { renderHook, act } from "@testing-library/react";
import { usePromptEngine } from "./usePromptEngine";
import { mockQuestions } from "../../functions/PromptEngine/PromptEngine.test";

describe("usePromptEngine", () => {
  test("GIVEN the hook was called with an array of questions THEN should return initial prompt state", () => {
    const expectedResult: PromptInProgress = {
      questions: mockQuestions,
      answers: [],
      status: "in progress",
    };
    const { result } = renderHook(() => usePromptEngine(mockQuestions));

    expect(result.current.value).toEqual(expectedResult);
  });

  test("GIVEN the hook was called with an array of questions WHEN onNewAnswer is called THEN should return an the updated prompt state", () => {
    const expectedResult1: PromptInProgress = {
      questions: mockQuestions,
      answers: ["Name: John"],
      status: "in progress",
    };
    const expectedResult2: PromptInProgress = {
      questions: mockQuestions,
      answers: ["Name: John", "Age: 30"],
      status: "in progress",
    };
    const expectedResult3: PromptComplete = {
      status: "complete",
      prompt: "Name: John\nAge: 30\nGender: Male",
    };
    const { result } = renderHook(() => usePromptEngine(mockQuestions));

    act(() => {
      result.current.onNewAnswer("John");
    });

    expect(result.current.value).toEqual(expectedResult1);

    act(() => {
      result.current.onNewAnswer("30");
    });

    expect(result.current.value).toEqual(expectedResult2);

    act(() => {
      result.current.onNewAnswer("Male");
    });

    expect(result.current.value).toEqual(expectedResult3);
  });

  test('should return initial prompt state when user resets the prompt', () => {
    // Arrange
    const { result } = renderHook(() => usePromptEngine(mockQuestions));
    const expectedResult: PromptInProgress = {
      questions: mockQuestions,
      answers: [],
      status: "in progress",
    };

    // Act
    act(() => {
      result.current.onNewAnswer("John");
    });
    act(() => {
      result.current.reset();
    });

    // Assert
    expect(result.current.value).toEqual(expectedResult);
  });
});
