import React, { useState } from 'react';
import './css/navmenu.css';



const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Nav">

    </div>
  );
}

export default Navmenu;