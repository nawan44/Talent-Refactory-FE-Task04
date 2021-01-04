import React from 'react';
import './style/footer.css';

import { Container, Col, Row } from 'reactstrap';


const medsos = {
    color: '#ffffff',
    fontSize: '40px',
    float: 'left',
    padding: '24px',
    textAlign: 'center',
    margin: '0 auto'
}
class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <Container >
                    <Row xs="3" className="social">
                        <Col xs="6" sm="4" className="contact-details">
                            <h4>
                                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            Call</h4>
                            <p><a href="https://wa.me/+6281xxxxxxxx" className="footer-text">081xxxxxxxx</a></p>
                        </Col>
                        <Col xs="6" sm="4" className="contact-details">
                            <h4><svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Visit</h4>
                            <p> <a href="https://goo.gl/maps/GpjMTqSTKenzxpkw8" className="footer-text">Jl. KH AHmad Junaedi 2 No 15  <br />Bekasi</a></p>
                        </Col>
                        <Col sm="4" className="contact-details">
                            <h4>
                                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                </svg>
                            Email</h4>
                            <p><a href="mailto:info@rsmartcomm.com" className="footer-text">info@rachwan.com</a>
                            </p>
                        </Col>
                    </Row>
                    <Row xs="3" className="social">
                        <Col xs="6" sm="4" >

                        </Col>
                        <Col xs="6" sm="4"  >
                            <Col>
                                <a href="https://facebook.com">
                                    <i class='fab fa-facebook-square' style={medsos} ></i>
                                </a>
                            </Col>
                            <Col><a href="https://instagram.com">
                                <i class='fab fa-instagram' style={medsos}></i>
                            </a>
                            </Col>
                            <Col>
                                <a href="https://linkedin.com">
                                    <i class='fab fa-linkedin' style={medsos}></i>
                                </a>
                            </Col>
                        </Col>
                        <Col sm="4" >

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="copyright">&copy; Rachwan all right reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;