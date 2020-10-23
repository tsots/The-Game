import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
color:${props => props.theme.colors.secondary};
`;

function App() {
 
  return (
    <div className="App">
      <Title>Hello Beautiful world!!!</Title>
    </div>
  );
}

export default App;
