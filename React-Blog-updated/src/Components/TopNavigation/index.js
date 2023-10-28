import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

function TopNav() {
  return (
    <>
    <div className='navright'>
    <div className='Navflex'>
    <Link to="/" className='Home'>Home</Link>
    <Link to="/Bollywood" className='Bollywood'>Bollywood</Link>
    <Link to="/Technology" className='Technology'>Technology</Link>
    <Link to="/Hollywood" className='Hollywood'>Hollywood</Link>
    <Link to="/Fitness" className='Fitness'>Fitness</Link>
    <Link to="/Food" className='Food'>Food</Link>
     </div>
     </div>
     <div className='hrcontainer'>
     <hr className='line' />
     </div>
    </>
   
  )
}

export default TopNav