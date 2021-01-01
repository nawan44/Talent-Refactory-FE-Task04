import React from 'react';
import Clients from './section/clients.jsx';
import Header from './header.jsx';
import About from './section/about.jsx';
import Service from './section/service.jsx';
import Swiper from './swiper.jsx';
import MediaPartner from './section/mediaPartner.jsx';
import Contact from './section/contact.jsx';


class Home extends React.Component {

    render() {
        return (
            <div >
                <Header />
                <About />
                <Service />
                <MediaPartner />

                <Clients />
                <Contact />
                {/* 



<Swiper />
                
                 */}
            </div >
        )
    }
}

export default Home;