import React from 'react';
import './style/service.css';
import '../../style/App.css'
import services1 from '../img/services/1.png';
import services2 from '../img/services/2.png';
import services3 from '../img/services/3.png';

const titleServices = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '26px',
    color: '#ffffff',
    textAlign: 'left'
}
const listServices = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '23px',
    color: '#ffffff',
    textAlign: 'left',
    margin: '5px 0 0 0'

}
const servicesLeft = {
    width: '10%',
    float: 'left'
}
const servicesRight = {
    width: '23%',
    float: 'left',

}
const containerServices = {
    width: '100%'
}
class Services extends React.Component {
    render() {
        return (
            <div id="services" >
                <h1>WHAT WE DO</h1>
                <hr className="line-section" />
                <hr className="line-section" />

                <h5>Our Core in Integrated Marketing Services :</h5>

                <div srtyle={containerServices}>
                    <div style={servicesLeft}>
                        <img src={services1} className="icon-service" />
                    </div>
                    <div style={servicesRight}>
                        <h2 style={titleServices}>1. Services 1</h2>
                        <ul>
                            <li style={listServices}>Marketing Communication</li>
                            <li style={listServices}>Event Services</li>
                            <li style={listServices}>Digital Solution</li>

                        </ul>
                    </div>
                    <div style={servicesLeft}>
                        <img src={services2} className="icon-service" />
                    </div>
                    <div style={servicesRight}>
                        <h2 style={titleServices}>2. Services 2</h2>
                        <ul>
                            <li style={listServices}>Media Placement</li>
                            <li style={listServices}>Public Relations</li>
                            <li style={listServices}>Sales Leverage</li>

                        </ul>
                    </div>
                    <div style={servicesLeft}>
                        <img src={services3} className="icon-service" />
                    </div>
                    <div style={servicesRight}>
                        <h2 style={titleServices}>3. Services 3</h2>
                        <ul>
                            <li style={listServices}>Media Activities</li>
                            <li style={listServices}>Brand Activation</li>
                            <li style={listServices}>Integrated Film Solution</li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;