import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { space } from 'styled-system';

import { BlockMonacoCodeEditor } from './BlockMonacoCodeEditor';
import { initialCode } from './initialCode';

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

const RunnableBlockCode = () => {
  const [code, setCode] = useState<string>(initialCode);
  const [codeResult, setCodeResult] = useState(null);

  const evalBlock = () => {
    const result = eval(code);

    setCodeResult(result);
  };

  return (
    <Wrapper>
      <BlockMonacoCodeEditor code={code} setCode={setCode} />
      <RunButton onClick={evalBlock} mt='5px' mb='5px'>
        <PlayArrowIcon />
        Run
      </RunButton>
      {!!codeResult && (
        <Result>
          <span>{codeResult}</span>
        </Result>
      )}
    </Wrapper>
  );
};

export default RunnableBlockCode;
