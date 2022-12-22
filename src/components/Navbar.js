import React from "react";
import img1 from './navimg.png'
import './navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const loc = useLocation()
  return (
    <>
      <nav className="navbar main-nav">
        <img className="iconn" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zh4t4uwwxv8pmc5amkbp" />    
        <div className="ml-auto">
          {loc.pathname==='/add_item'? null :
            <button className="btn" style={{backgroundColor: '#3ccc7c', color: 'white', marginRight: '0'}} onClick={()=>navigate('/add_item')}>Add Item</button>}
        </div>
        <img className="logo" src={img1} />
        
      </nav>
    </>
  );
};

export default Navbar;