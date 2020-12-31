import React from 'react';
import OurClients from './ourClients.jsx';
import Header from './header.jsx';
import About from './about.jsx';
import WeDo from './weDo.jsx';
import Swiper from './swiper.jsx';
import Youtube from './youtube.jsx';
import MediaPartner from './mediaPartner.jsx';
import Contact from './contact.jsx';


class Home extends React.Component {

    render() {
        return (
            <div >
                <Header />
                <About />
                <WeDo />
                <MediaPartner />
                <Swiper />
                <Youtube />
                <OurClients />
                <Contact />
            </div >
        )
    }
}

export default Home;