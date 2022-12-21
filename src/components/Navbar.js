import React, { useState } from "react";
import img1 from './navimg.png'
import './navbar.css'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar main-nav">
        <img className="icon" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zh4t4uwwxv8pmc5amkbp" />    
        <div className="ml-auto">
        <button className="btn" style={{backgroundColor: '#3ccc7c', color: 'white', marginRight: '0'}}>Add Item</button>
        </div>
        <img className="logo" src={img1} />
        
      </nav>
    </>
  );
};

export default Navbar;