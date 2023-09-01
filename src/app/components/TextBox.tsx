interface TextBoxProps {
  children: React.ReactNode;
}

export const TextBox: React.FC<TextBoxProps> = ({ children }) => {
  return <div className="bg-gray-100 p-4 rounded-md">{children}</div>;
};
