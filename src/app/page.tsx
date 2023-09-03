"use client";

import { useState } from "react";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { TextInput } from "../components/TextInput";
import usePromptEngine from "@/hooks/usePromptEngine/usePromptEngine";
import { guideQuestions } from "@/data/guideQuestions";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const promptState = usePromptEngine(guideQuestions);
  const [displayText, setDisplayText] = useState(guideQuestions[0].question);

  const handleButtonClick = () => {
    promptState.onNewAnswer(inputText);
    setInputText("");
    if (promptState.value.status === "in progress") {
      const nextQuestion =
        promptState.value.questions[promptState.value.answers.length];
      const lastAnswer =
        promptState.value.answers[promptState.value.answers.length - 1];

      setDisplayText(
        `${displayText}
        
        ${lastAnswer}
        
        ${nextQuestion.question}`
      );
    }

    if (promptState.value.status === "complete") {
      setDisplayText(promptState.value.prompt);
    }
  };

  return (
    <div className="p-4">
      <TextBox>{displayText}</TextBox>
      <div className="flex mt-4">
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Enter text here"
        />
        <Button onClick={handleButtonClick}>Click me</Button>
      </div>
    </div>
  );
}
