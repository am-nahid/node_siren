import React from 'react'
import TopNav from '../../Components/TopNavigation'
import Logo from '../../Components/logo'
import FuncBollywood from './FuncBollywood'
import TopPost from './TopPost'
import Footer from '../../Components/footer/Footer'
import LogoMobile from '../../Components/Logomobile/LogoMobile'
import "../../App.css"

function Bollywood() {
  return (
    <>
    <div className='mobileview'> <LogoMobile/></div>
     <div className='view'><Logo/></div> 
    <TopNav/>
    {/* <ContextApi> */}
      <div className='Bollymaincontainer'>
        <div className='Bollysubmaincontainer'>
    <FuncBollywood/>
    <TopPost/>
    </div>
    </div>
    {/* </ContextApi> */}
    {/* <Footer/> */}
    
    </>
  )
}

export default Bollywood