import React from 'react';
import './style/client.css';

import '../../style/App.css'
import antv from '../img/media/antv.png';
import detik from '../img/media/detik.png';
import globatv from '../img/media/globaltv.png';
import jawa from '../img/media/jawa.png';
import kumparan from '../img/media/kumparan.png';
import metrotv from '../img/media/metrotv.png';
import net from '../img/media/net.png';
import rcti from '../img/media/rcti.png';
import sctv from '../img/media/sctv.png';
import tirto from '../img/media/tirto.png';
import transtv from '../img/media/transtv.png';
import tribun from '../img/media/tribun.png';
import tvri from '../img/media/tvri.png';


const containerClient = {
    width: '100%'
}
const logoMedia = {
    width: '100px',
    margin: '20px'
}


class Clients extends React.Component {
    render() {
        return (
            <div id="client">
                <h1>OUR CLIENTS</h1>
                <hr className="line-section" />
                <hr className="line-section" />

                <h5>Here are some our clients that we've worked on :</h5>

                <div srtyle={containerClient}>
                    <img src={antv} style={logoMedia} />
                    <img src={detik} style={logoMedia} />
                    <img src={globatv} style={logoMedia} />
                    <img src={jawa} style={logoMedia} />
                    <img src={kumparan} style={logoMedia} />
                    <img src={metrotv} style={logoMedia} />
                    <img src={net} style={logoMedia} />
                    <img src={rcti} style={logoMedia} />
                    <img src={sctv} style={logoMedia} />
                    <img src={tirto} style={logoMedia} />
                    <img src={transtv} style={logoMedia} />
                    <img src={tribun} style={logoMedia} />
                    <img src={tvri} style={logoMedia} />

                </div>
            </div>
        );
    }
}

export default Clients;