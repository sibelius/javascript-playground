import React from 'react';
import { Text } from 'rebass';
import media from 'styled-media-query';
import styled from 'styled-components';
import { BlockMonacoCodeEditor } from './BlockMonacoCodeEditor';

const Content = styled.div`
  margin: 0 auto;
  max-width: 50em;
  line-height: 1.5;
  ${media.lessThan('small')`
    margin: 0 20px;
  `}
`;

const App = () => {
  return (
    <Content>
      <Text fontWeight='bold' fontSize='40px' mb='10px' mt='10px'>
        JavaScript Playground
      </Text>
      <BlockMonacoCodeEditor />
    </Content>
  );
};

export default App;
