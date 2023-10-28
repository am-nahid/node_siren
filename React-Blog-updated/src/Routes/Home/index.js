import React from 'react'
import TopNav from '../../Components/TopNavigation'
import Logo from '../../Components/logo'
import Banner from './Banner'
import Latest from './Latest'
import LatestArticle from './LatestArticle'
import Footer from '../../Components/footer/Footer'
import TopPPost from './TopPPost'
import LogoMobile from '../../Components/Logomobile/LogoMobile'
import "./Home.css"



function Home() {
  return (
    <div>
 <div className='mobileview'><LogoMobile/></div>
     <div className='view'><Logo/></div> 

      <TopNav/>
      {/* <ContextApi> */}
        <div className='homecontainer'>
        <div className='maincontainer'>
      <Banner/>
      <Latest/>
      <div className='home-toplatest'>
      <LatestArticle/>
      <TopPPost/>
      </div>
      
      </div>
      </div>
      {/* </ContextApi> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home