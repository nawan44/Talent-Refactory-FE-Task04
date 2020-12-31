import React from 'react';
import './css/header.css';
import Navmenu from './component/navmenu.jsx';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Navmenu />
            </div >
        )
    }
}

export default Header;