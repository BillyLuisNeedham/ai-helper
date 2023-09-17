import React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-gray-700 text-white py-2 px-4 rounded-md font-mono border border-gray-600 hover:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
