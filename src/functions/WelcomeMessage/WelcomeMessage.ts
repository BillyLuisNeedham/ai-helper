import { welcomeMessages } from "../../data/welcomeMessages/welcomeMessages";

export function getWelcomeMessage(messages: string[] = welcomeMessages): string {
    return messages[Math.floor(Math.random() * messages.length)];
}