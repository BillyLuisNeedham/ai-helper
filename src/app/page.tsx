"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    setDisplayText(GetDisplayText(promptState.value));
  }, [promptState.value]);

  const handleButtonClick = () => {
    promptState.onNewAnswer(inputText);
    setInputText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleButtonClick();
    }
  };

  return (
      <div className="p-4 bg-black text-white font-mono">
        <div className="flex">
          <div className="mr-2 text-green-500">$</div>
          <div className="flex-1">
            <TextBox text={displayText} />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="mr-2 text-green-500">$</div>
          <TextInput
            value={inputText}
            onChange={setInputText}
            onKeyDown={handleKeyDown}
            placeholder="Enter text here"
          />
        </div>
        <div className="flex mt-4">
          <div className="mr-2 text-green-500">$</div>
          <Button onClick={handleButtonClick}>Click me</Button>
        </div>
      </div>
    );
}
