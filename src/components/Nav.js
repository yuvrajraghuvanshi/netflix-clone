import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
           window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
           });
           return()=>{window.removeEventListener("scroll");}
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix'/>

        <img className='nav__avtar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Profile'/>

    </div>
  )
}

export default Nav