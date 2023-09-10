import React, { useRef } from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  onKeyDown,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    onChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className="bg-transparent flex-1 focus:outline-none w-full resize-none"
      rows={1}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
    />
  );
};