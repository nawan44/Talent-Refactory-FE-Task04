import React from 'react';
import './style/header.css';
import Navmenu from './navmenu.jsx';
import { Container, Row } from 'reactstrap';
import logo from './img/logo/logo.png';

const brandName = {
    margin: '30px 0 30px 0',
    width: '100%',
    height: 50,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 60,
    lineHeight: '50px'
}
const tagLine = {
    color: '#ffffff',
    textAlign: 'center',
    margin: ' 0 auto',
    marginTop: 30,
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 35,
    lineHeight: '30px'
}
const arrow = {
    textAlign: 'center',
    margin: ' 0 auto',
    marginTop: 50,
}
const lineHeader = {
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 500,
    borderColor: '#ef4035'
}
const logoHeader = {
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
}
class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Container>
                    <Navmenu />
                    <Row>
                        <img src={logo} style={logoHeader} />
                    </Row>
                    <Row>
                        <h1 style={brandName}>Rachwan</h1>
                    </Row>
                    <Row>
                        <hr style={lineHeader} />
                    </Row>
                    <Row>
                        <hr style={lineHeader} />
                    </Row>
                    <Row>
                        <h2 style={tagLine}>Reach Your Global</h2>
                    </Row>
                    <Row>
                        <div style={arrow}>
                            <a className="btn-arrow" href="#about">
                                <i class='fas fa-arrow-circle-down'></i>

                            </a>
                        </div>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Header;