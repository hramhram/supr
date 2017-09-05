import React, { Component } from 'react';
import styled from 'styled-components'

const GenericArr = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Arr = styled(GenericArr)`
  background-color: #30d5c8;
`

const BackgroundImage = styled(GenericArr)`
  background-size: cover;
  background-image: url(${props => props.url});
`

const Corgi = styled.button`
  min-height: 30px;
  padding: 5px;
  background-color: orange;
  color: black;
`

class App extends Component {
  state = {
    index: 1
  }

  handleClick = () => {
    this.setState(state => ({
      index: state.index < 10 ? state.index + 1 : 1
    }))
  }

  render() {
    return (
      <Arr>
        <BackgroundImage url={`./${this.state.index}.jpg`}>
          <Corgi onClick={this.handleClick}>super corgi</Corgi>
        </BackgroundImage>
      </Arr>
    );
  }
}

export default App;
