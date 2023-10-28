import React, { useState } from 'react'
import './logoMobile.css'
import { NavLink } from 'react-router-dom'

function LogoMobile() {
    
const [show, setShow]=useState(false)


const handleMenu=() =>{
setShow(prev=>!prev)
}



  return (
    <div className='TheLogoCon'>
    <div className='moLogoPar'>
        <div className='mLogoSub'>
    <div>
      <h1 className="TheMobileLogo">
        <span className="vertical">The</span> Siren
      </h1>
    </div>
    <div onClick={()=>setShow(!show)} className='MenuBar'>
        <div className='Menu'></div>
        <div className='Menu'></div>
        <div className='Menu'></div>
   
    </div>
    
  </div>
 
  </div>
  <hr className='mobileHr'/>

  { show && (
  <div onClick={handleMenu} className='selector'>
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/"} >Home</NavLink></div>
  <div className='coms'><NavLink style={{color:'black' , textDecoration:'none'}} to={"/Bollywood"} >Bollywood</NavLink></div>
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Technology"} >Tech</NavLink></div>
  <div className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Hollywood"} >Hollywood</NavLink></div>
  <div className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Fitness"} >Fitness</NavLink></div>
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Food"} >Food</NavLink></div>
  </div>)
}

  </div>
  )
}

export default LogoMobile 
