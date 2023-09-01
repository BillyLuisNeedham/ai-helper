import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="py-2 px-4 rounded-md bg-blue-500 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
