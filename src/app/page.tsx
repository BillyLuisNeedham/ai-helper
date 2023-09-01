"use client";

import { useState } from 'react';
import { Button } from './components/Button';
import { TextBox } from './components/TextBox';
import { TextInput } from './components/TextInput';

export default function Home() {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    console.log(text);
  };

  return (
    <div className="p-4">
      <TextBox>This is the box of text.</TextBox>
      <div className="mt-4">
        <TextInput
          value={text}
          onChange={setText}
          placeholder="Enter text here"
        />
      </div>
      <Button onClick={handleButtonClick}>
        Click me
      </Button>
    </div>
  );
}
