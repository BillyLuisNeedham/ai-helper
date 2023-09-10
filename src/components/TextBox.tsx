import { convertStringToHtml } from "@/functions/ConvertStringToHtml/ConvertStringToHtml";

interface TextBoxProps {
  text: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  let formattedText = convertStringToHtml(text);

    return (
      <div className="bg-black text-white  rounded-md font-mono" dangerouslySetInnerHTML={{ __html: formattedText }} />
      );
};
