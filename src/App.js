import React, { Component } from 'react';
import { Button, Container, Row, Col } from './lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col xs='3' l='3' m='2' ><Button block={true}>Click me</Button></Col>
          <Col xs='3' l='3' m='2'><Button big={true}>Click me</Button></Col>
          <Col xs='3' l='3' m='2'><Button theme='danger'>Click me</Button></Col>
          <Col xs='3' l='3' m='2'><Button theme='warning'>Click me</Button></Col>
          <Col xs='3' l='3' m='2'><Button theme='warning'>Click me</Button></Col>
          <Col xs='3' l='3' m='2'><Button theme='warning'>Click me</Button></Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
