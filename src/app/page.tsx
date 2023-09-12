"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { TextInput } from "../components/TextInput";
import usePromptEngine from "@/hooks/usePromptEngine/usePromptEngine";
import { guideQuestions } from "@/data/PromptOptions/guideQuestions";
import { GetPromptStateDisplayText } from "@/functions/GetPromptStateDisplayText/GetPromptStateDisplayText";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const promptState = usePromptEngine(guideQuestions);
  const [displayText, setDisplayText] = useState(
    GetPromptStateDisplayText(promptState.value)
  );

  useEffect(() => {
    setDisplayText(GetPromptStateDisplayText(promptState.value));
  }, [promptState.value]);

  const handleButtonClick = () => {
    promptState.onNewAnswer(inputText);
    setInputText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleReset = () => {
    promptState.reset();
    setDisplayText(GetPromptStateDisplayText(promptState.value));
    setInputText("");
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
        <div className="flex-1">
          <TextInput
            value={inputText}
            onChange={setInputText}
            onKeyDown={handleKeyDown}
            placeholder="Enter text here"
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="mr-2 text-green-500">$</div>
        <div className="flex-1">
          <div className="flex">
            <div className="mr-4">
              <Button onClick={handleButtonClick}>Click me</Button>
            </div>
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
