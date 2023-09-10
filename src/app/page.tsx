"use client";

import { useState } from "react";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { TextInput } from "../components/TextInput";
import usePromptEngine from "@/hooks/usePromptEngine/usePromptEngine";
import { guideQuestions } from "@/data/guideQuestions";
import { GetDisplayText } from "@/functions/GetDisplayText/GetDisplayText";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const promptState = usePromptEngine(guideQuestions);
  const [displayText, setDisplayText] = useState(
    GetDisplayText(promptState.value)
  );

  const handleButtonClick = () => {
    promptState.onNewAnswer(inputText);
    setDisplayText(GetDisplayText(promptState.value));
  };

  return (
    <div className="p-4">
      <TextBox text={displayText} />
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
