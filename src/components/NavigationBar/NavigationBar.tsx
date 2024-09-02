import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">Dmitrii Dronov</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="aboutMe">About Me</Nav.Link>
							<Nav.Link href="CV">CV</Nav.Link>
							<Nav.Link href="Blog">Blog</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavigationBar;
