import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { space } from 'styled-system';
import { ErrorBoundary } from 'react-error-boundary';

import { useDebouncedCallback } from 'use-debounce';

import { BlockMonacoCodeEditor } from './BlockMonacoCodeEditor';
import { initialCode } from './initialCode';
import { createLiveEditor } from './createLiveEditor';

const RunButton = styled(Button)`
  color: green;
  ${space}
`;

const Result = styled.div`
  background: #f9f8f7;
  border: solid 1px #e8e5e8;
  padding: 5px;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Preview = styled.div`
  &:last-child {
    border-top: solid 1px #ccc;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
  }
  &:empty:before {
    content: 'Nothing to render';
    color: rgba(0, 0, 0, 0.3);
  }
`;

const RedSpan = styled.span`
  color: red;
`;

const PreviewError = () => {
  return <RedSpan>React Preview Error</RedSpan>;
};

const RunnableBlockCode = () => {
  const [code, setCode] = useState<string>(initialCode);
  const [codeResult, setCodeResult] = useState(null);

  const previewRef = useRef();
  const editorRef = useRef();

  const evalBlock = () => {
    try {
      const result = eval(code);

      setCodeResult(result);
    } catch (err) {
      setCodeResult(err.toString());
    }
  };

  useEffect(() => {
    editorRef.current = createLiveEditor(previewRef.current);
  }, []);

  const [run] = useDebouncedCallback(code => {
    editorRef.current.run(code);
  });

  const onCodeChange = newCode => {
    setCode(newCode);

    run(newCode);
  };

  return (
    <Wrapper>
      <BlockMonacoCodeEditor code={code} setCode={onCodeChange} />
      <RunButton onClick={evalBlock} mt='5px' mb='5px'>
        <PlayArrowIcon />
        Run
      </RunButton>
      {!!codeResult && (
        <Result>
          <span>{codeResult}</span>
        </Result>
      )}
      <ErrorBoundary FallbackComponent={PreviewError}>
        <Preview ref={previewRef} />
      </ErrorBoundary>
    </Wrapper>
  );
};

export default RunnableBlockCode;
