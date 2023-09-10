/**
 * Converts a string to HTML by replacing line breaks with the HTML <br /> tag.
 * @param value - The input string that may contain line breaks.
 * @returns The input string with line breaks replaced by the HTML <br /> tag.
 */
export function convertStringToHtml(value: string): string {
    return value.replace(/(?:\r\n|\r|\n)/g, "<br />");
}