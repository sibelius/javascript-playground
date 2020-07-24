import React, { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import { initialCode } from './initialCode';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

export const BlockCodeMirrorEditor = () => {
  const [code, setCode] = useState(initialCode);

  const options = {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
  };

  return (
    <CodeMirror
      value={code}
      options={options}
      onBeforeChange={(editor, data, value) => {
        setCode(value);
      }}
      onChange={(editor, data, value) => {
      }}
    />
  );
};
