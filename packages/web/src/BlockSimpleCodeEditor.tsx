import 'prismjs'
import React, { useState } from 'react';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import { initialCode } from './initialCode';

export const BlockSimpleCodeEditor = () => {
  const [code, setCode] = useState(initialCode);

  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  )
}
