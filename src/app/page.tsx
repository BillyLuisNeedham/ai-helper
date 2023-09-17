"use client"

import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { TextBox } from "../components/TextBox"
import { TextInput } from "../components/TextInput"
import { useAppEngine } from "@/hooks/useAppEngine/useAppEngine"
import { promptOptions } from "@/data/PromptOptions"

export default function Home() {
  const [inputText, setInputText] = useState("")
  const appState = useAppEngine(promptOptions)
  const [displayText, setDisplayText] = useState(
    appState.value.displayString ?? ""
  )

  useEffect(() => {
    setDisplayText(appState.value.displayString ?? "")
    setInputText("")
  }, [appState.value])

  const handleButtonClick = () => {
    appState.onNewCommand(inputText)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleButtonClick()
    }
  }

  const handleReset = () => {
    appState.reset()
  }

  const handleInputText = (newText: string) => {
    if (
      appIsInSelectPhaseAndInputIsSuitableToFireImmediately(
        newText,
        appState.value
      )
    ) {
      appState.onNewCommand(newText)
    } else {
      setInputText(newText)
    }
  }

  return (
    <div className="min-h-screen p-4 bg-gray-800 text-gray-300 font-mono">
      <div className="flex">
        <div className="flex-1">
          <TextBox text={displayText} />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex-1">
          <TextInput
            value={inputText}
            onChange={handleInputText}
            onKeyDown={handleKeyDown}
            placeholder="Enter text here"
            autoFocus={true}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  )
}
function appIsInSelectPhaseAndInputIsSuitableToFireImmediately(
  newText: string,
  appState: AppEngineState
): boolean {
  return appState.status === "select phase" && newText.length === 1
}
