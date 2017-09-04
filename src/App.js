import React, { Component } from 'react';
import styled from 'styled-components'

const Arr = styled.div`
  width: 100vw;
  height:100vh;
  background-color: #30d5c8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Corgi = styled.button`
  min-height: 30px;
  padding: 5px;
  background-color: orange;
  color: black;
`

class App extends Component {
  handleClick() {
    alert("I love corgi!!!!")
  }

  render() {
    return (
      <Arr>
        <Corgi onClick={this.handleClick}>super corgi</Corgi>
      </Arr>
    );
  }
}

export default App;
