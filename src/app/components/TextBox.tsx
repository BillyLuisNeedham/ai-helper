interface TextBoxProps {
  children: React.ReactNode;
}

export const TextBox: React.FC<TextBoxProps> = ({ children }) => {
    return (
        <div className="bg-black text-white p-4 rounded-md font-mono">
          {children}
        </div>
      );
};
