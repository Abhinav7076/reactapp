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
        <ul class="nav justify-content-end">
          <li class="nav-item">
          {loc.pathname==='/add_item'? null :
                    <button className="btn add_item" onClick={()=>navigate('/add_item')}>Add Item</button>}
          </li>
          <li class="nav-item">
          <img className="logo" src={img1} />
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;