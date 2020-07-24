import MonacoEditor from 'react-monaco-editor';
import React, { useState } from 'react';
import { initialCode } from './initialCode';

export const BlockMonacoCodeEditor = () => {
  const [code, setCode] = useState(initialCode);

  const options = {
    selectOnLineNumbers: true,
  };

  const editorDidMount = () => {
    console.log('focus');
  }

  return (
    <MonacoEditor
      width="800"
      height="100"
      language="typescript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={(newValue, e) => setCode(newValue)}
      editorDidMount={editorDidMount}
    />
  );
};
