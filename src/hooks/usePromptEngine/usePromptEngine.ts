import { PromptEngine } from "../../functions/PromptEngine/PromptEngine";
import { useState } from "react";

export function usePromptEngine(questions: Question[]) {
  const [value, setValue] = useState<PromptState>(getInitialState(questions));

  function handleChange(answer: string) {
    setValue(PromptEngine(value, answer));
  }

  return {
    value,
    onNewAnswer: handleChange,
  };
}

function getInitialState(questions: Question[]): PromptInProgress {
  return {
    questions,
    answers: [],
    status: "in progress",
  };
}

export default usePromptEngine;
