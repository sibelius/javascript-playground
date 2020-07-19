import React from 'react';
import { Text, Flex } from 'rebass';

const App = () => {
  return (
    <Flex flex={1} alignItems='center' justifyContent='center' height='100vh'>
      <Text fontWeight='bold' fontSize='56px' color='red'>
        Node Playground
      </Text>
    </Flex>
  );
};

export default App;
