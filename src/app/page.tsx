"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { TextInput } from "../components/TextInput";
import usePromptEngine from "@/hooks/usePromptEngine/usePromptEngine";
import { guideOption, guideQuestions } from "@/data/PromptOptions/guideQuestions";
import { GetPromptStateDisplayText } from "@/functions/GetPromptStateDisplayText/GetPromptStateDisplayText";
import { useAppEngine } from "@/hooks/useAppEngine/useAppEngine";
import { swissOption } from "@/data/PromptOptions/swissQuestions";

const prompts: PromptOption[] = [guideOption, swissOption]

export default function Home() {
  const [inputText, setInputText] = useState("");
  const appState = useAppEngine(prompts);
  const [displayText, setDisplayText] = useState(
    appState.value.displayString ?? ""
  );

  useEffect(() => {
    setDisplayText(appState.value.displayString ?? "");
  }, [appState.value]);

  const handleButtonClick = () => {
    appState.onNewCommand(inputText);
    setInputText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleReset = () => {
    setDisplayText("");
    appState.reset();
    setInputText("");
  };

  return (
    <div className="min-h-screen p-4 bg-black text-white font-mono">
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
