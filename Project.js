import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Project = () => {
    const navigation=useNavigate()
    const styleno={
        display:"flex",
        justifyContent:"center",
        fontSize:"20px",
        
    }
  return (
      <>
    <div style={styleno}>
        <button onClick={function func(){
            navigation("/payment")}}>Buy Now</button>
    </div>
    <div>
      <nav>
      <NavLink to="mobile" className="navLink">Mobile</NavLink>
      <NavLink to="laptop" className="navLink">Laptop</NavLink>
  </nav>
  <Outlet/>
  </div>
  </>
  )
}
export default Project