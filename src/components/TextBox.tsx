import { convertStringToHtml } from "@/functions/ConvertStringToHtml/ConvertStringToHtml";

interface TextBoxProps {
  text: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  let formattedText = convertStringToHtml(text);

    return (
      <div className="bg-gray-800 text-gray-300 rounded-md font-mono border border-gray-700 p-2" dangerouslySetInnerHTML={{ __html: formattedText }} />
      );
};
