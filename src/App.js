import React, { Component } from 'react';
import { Button, Container, Row, Col } from './lib';
import { Theme, Provider } from './lib/Theme';

class App extends Component {
  render() {
    return (
      <Provider theme={new Theme()}>
        <div className="App">
          <Row>
            <Col xs='3' l='3' m='2'><Button block={true}>Click me</Button></Col>
            <Col xs='3' l='3' m='2'><Button big={true}>Click me</Button></Col>
            <Col xs='3' l='3' m='2'><Button color='danger'>Click me</Button></Col>
            <Col xs='3' l='3' m='2'><Button color='warning'>Click me</Button></Col>
            <Col xs='3' l='3' m='2'><Button color='success'>Click me</Button></Col>
            <Col xs='3' l='3' m='2'><Button color='link'>Click me</Button></Col>
          </Row>
        </div>
      </Provider>
    );
  }
}

export default App;
