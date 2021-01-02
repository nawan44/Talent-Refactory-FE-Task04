import React from 'react';
import Clients from './section/clients.jsx';
import Header from './header.jsx';
import About from './section/about.jsx';
import Services from './section/services.jsx';
import MediaPartner from './section/mediaPartner.jsx';
import Contact from './section/contact.jsx';
import SwiperPorto from './swiper.jsx';


class Home extends React.Component {

    render() {
        return (
            <div >
                <Header />
                <About />
                <Services />
                <MediaPartner />
                <SwiperPorto />
                <Clients />
                <Contact />
            </div >
        )
    }
}

export default Home;