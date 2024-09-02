import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CV extends Component {
	render() {
		const headerStyle = { marginTop: "5%", postion: "absolute", left: '0px' };
		return (
			<>
				<Container>
					<div style={headerStyle}>
						<Row>
							<Col>
								<h1>
									<Image src='https://avatars3.githubusercontent.com/u/55624814?s=460&u=e4c36df0a095b303193d859fcf13eea54f53f626&v=4' roundedCircle height="100" width="100"></Image>
									Dmitrii <strong>Dronov</strong>
								</h1>
							</Col>
							<Col>
								<p >
									Chisinau&nbsp;MD-2020 |
									<a href="tel:+373-78-47-55-39">+373&nbsp;78&nbsp;475539</a> |
									<a href="mailto:dmitrii.dronov2001@gmail.com">dmitrii.dronov2001@gmail.com</a> |
									GitHub:&nbsp;<a href="https://github.com/BATK0VICH">BATK0VICH</a> |
									LinkedIn: <a href="https://www.linkedin.com/in/dmitrii-dronov/">Dmitrii Dronov</a> |
									Trailhead: <a href="https://trailblazer.me/id/ddronov">ddronov</a>
								</p>
							</Col>
						</Row>
					</div>
				</Container >
			</>
		);
	}
}

export default CV;
