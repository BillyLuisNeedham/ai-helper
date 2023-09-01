import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="bg-green-500 text-white py-2 px-4 rounded-md font-mono"
    onClick={onClick}
    >
      {children}
    </button>
  );
};
