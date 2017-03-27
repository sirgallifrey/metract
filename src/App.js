import React, { Component } from 'react';
import { Button, Container, Row, Col } from './lib';
import Theme from './lib/Theme';
import { ThemeProvider } from 'styled-components';

class App extends Component {
	
	constructor() {

		super();
		this.theme = Theme();

		//this is how user would customize the layout
		//this.theme.grid.cellPadding = 32;
	}

	render() {
		return (
			<ThemeProvider theme={this.theme}>
				<Container>
					<Row>
						<Col s="3"></Col>
						<Col s="9">
							<Row>
								<Col xxs='6' xs='3' l='3' m='2'><Button block={true}>Click me</Button></Col>
								<Col xs='3' l='3' m='2'><Button big={true}>Click me</Button></Col>
								<Col xs='3' l='3' m='2'><Button color='danger'>Click me</Button></Col>
								<Col xs='3' l='3' m='2'><Button color='warning'>Click me</Button></Col>
								<Col xs='3' l='3' m='2'><Button color='success'>Click me</Button></Col>
								<Col xs='3' l='3' m='2'><Button color='lilac' big>Another button</Button></Col>
								<Col xs='3' l='3' m='2'><Button color='link' block={true}>Click me</Button></Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</ThemeProvider>
		);
	}
}

export default App;
