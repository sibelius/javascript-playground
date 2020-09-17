import React, { useState } from 'react';
import { Text } from 'rebass';
import media from 'styled-media-query';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

import RunnableBlockCode from './RunnableBlockCode';
import { initialCode } from './initialCode';

const Content = styled.div`
  margin: 0 auto;
  max-width: 50em;
  line-height: 1.5;
  ${media.lessThan('small')`
    margin: 0 20px;
  `}
`;

const App = () => {
  const [blocks, setBlocks] = useState([
    {
      code: initialCode,
    },
  ]);

  const newBlock = () => {
    const newBlocks = [
      ...blocks,
      {
        code: initialCode,
      },
    ];

    setBlocks(newBlocks);
  };

  return (
    <Content>
      <Text fontWeight='bold' fontSize='40px' mb='10px' mt='10px'>
        JavaScript Playground
      </Text>
      {blocks.map((block, i) => (
        <RunnableBlockCode key={i} />
      ))}
      <Button onClick={newBlock} mt='5px' mb='5px'>
        <AddIcon />
      </Button>
    </Content>
  );
};

export default App;
