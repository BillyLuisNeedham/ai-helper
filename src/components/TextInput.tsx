import React, { useEffect, useRef } from "react"

interface TextInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  autoFocus?: boolean
  onReset?: () => void
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  onKeyDown,
  autoFocus,
  onReset,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [autoFocus])

  useEffect(() => {
    resizeInput()
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const resizeInput = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
    }
    if (onKeyDown) {
      onKeyDown(event)
    }
  }

  return (
    <div className="relative flex items-center bg-gray-800 border border-gray-700 rounded">
      <textarea
        ref={textareaRef}
        className="flex-1 bg-gray-800 text-gray-300 focus:outline-none resize-none placeholder-gray-500 py-2 px-2 pr-4"
        rows={1}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      {onReset && (
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-red-500"
          onClick={onReset}
        >
          ↺
        </div>
      )}
    </div>
  )
}
