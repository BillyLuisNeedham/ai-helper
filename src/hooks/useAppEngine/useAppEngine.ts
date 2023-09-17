import { appEngine } from "../../functions/AppEngine/AppEngine"
import { useState } from "react"

export function useAppEngine(promptOptions: PromptOption[]) {
  const [value, setValue] = useState<AppEngineState>(
    appEngine(getInitialState(promptOptions), null)
  )

  function handleChange(command: string) {
    setValue(appEngine(value, command))
  }

  function reset() {
    setValue(appEngine(getInitialState(promptOptions), null))
  }

  return {
    value,
    onNewCommand: handleChange,
    reset,
  }
}

function getInitialState(promptOptions: PromptOption[]): AppEngineInitialState {
  return {
    status: "initial",
    options: promptOptions,
  }
}
