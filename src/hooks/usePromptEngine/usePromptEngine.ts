import { PromptEngine } from "../../functions/PromptEngine/PromptEngine";
import { useState } from "react";

export function usePromptEngine(questions: Question[]) {
  const initialPromptState: PromptInProgress = {
    questions,
    answers: [],
    status: "in progress",
  };

  const [value, setValue] = useState<PromptState>(initialPromptState);

  function handleChange(answer: string) {
    setValue(PromptEngine(value, answer));
  }

  return {
    value,
    onNewAnswer: handleChange,
  };
}

export default usePromptEngine;
