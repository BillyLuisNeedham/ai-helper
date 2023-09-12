export function displayOptions(options: PromptOption[], command: string | null): DisplayState {
    if (command === null) {
        return {
            status: "in progress",
            options: options,
        }
    } else {
        const selectedQuestions = options.find(option => option.commandCode === command)?.questions;
        if (selectedQuestions === undefined) {
            return {
                status: "in progress",
                options: options,
            }
        } else {
            return {
                status: "complete",
                selectedQuestions: selectedQuestions,
            }
        }
    }
}
