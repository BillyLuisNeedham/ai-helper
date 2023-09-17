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
  const [placeHolderText, setPlaceHolderText] = useState("Type a command")

  useEffect(() => {
    setDisplayText(appState.value.displayString ?? "")
    setInputText("")
    setPlaceHolderText(getPlaceholderText(appState.value))
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
    } else if (appIsCompleteAndInputIsReset(newText, appState.value)) {
      handleReset()
    } else if (appIsCompleteAndInputIsCopy(newText, appState.value)) {
      handleCopyText(appState.value)
    }else {
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
            placeholder={placeHolderText}
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
function appIsCompleteAndInputIsReset(
  newText: string,
  state: AppEngineState
): boolean {
  const newTextIsReset = newText.toLowerCase() === "r"

  return state.status === "complete" && newTextIsReset
}

function appIsCompleteAndInputIsCopy(
  newText: string,
  state: AppEngineState
): boolean {
  const newTextIsCopy = newText.toLowerCase() === "c"

  return state.status === "complete" && newTextIsCopy
}

function getPlaceholderText(state: AppEngineState): string {
  if (state.status === "select phase") {
    return "Type a command"
  }

  if (state.status === "complete") {
    return "Type c to copy prompt. Type r to reset"
  } 

  return "Enter text here"
}

async function copyTextToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}

function handleCopyText(value: AppEngineState) {
  if (value.status === "complete") {
    copyTextToClipboard(value.prompt)
  } else {
    copyTextToClipboard(value.displayString ?? "")
  }
}
