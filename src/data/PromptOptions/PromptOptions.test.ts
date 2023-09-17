import { promptOptions } from "."

describe("PromptOptions", () => {
  test("All command codes are unique", () => {
    const commandCodes = promptOptions.map((option) => option.commandCode)

    let checkedCodes: string[] = []

    commandCodes.forEach((code) => {
      expect(checkedCodes.includes(code)).toBe(false)
      checkedCodes.push(code)
    })
  })
})
