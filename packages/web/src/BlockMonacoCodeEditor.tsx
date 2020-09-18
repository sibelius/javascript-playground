import MonacoEditor from 'react-monaco-editor';
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line
import * as monaco from 'monaco-editor';

type BlockMonacoCodeEditorProps = {
  code: string;
  setCode: (code: string) => void;
};
export const BlockMonacoCodeEditor = ({
  code,
  setCode,
}: BlockMonacoCodeEditorProps) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  // eslint-disable-next-line
  const [height, setHeight] = useState(20 * 5);
  const [isMounted, setIsMounted] = useState(false);

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    readOnly: false,
    scrollBeyondLastLine: false,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden',
    },
  } as monacoEditor.editor.IEditorConstructionOptions;

  // TODO - fix auto height
  const updateHeight = () => {
    // eslint-disable-next-line
    const contentHeight = Math.min(300, editorRef.current.getContentHeight());

    // setHeight(contentHeight);

    // const width = '100%';

    // editorRef.current.layout({
    //   // width,
    //   height: contentHeight,
    // });
  };

  const editorDidMount = editor => {
    editorRef.current = editor;
    setIsMounted(true);
  };

  useEffect(() => {
    if (isMounted) {
      editorRef.current.onDidContentSizeChange(updateHeight);
    }
  }, [isMounted]);

  return (
    <MonacoEditor
      width='100%'
      height={height}
      language='typescript'
      theme='vs-dark'
      value={code}
      options={options}
      onChange={newValue => setCode(newValue)}
      editorDidMount={editorDidMount}
    />
  );
};
