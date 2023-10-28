import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../../Routes/Home';
import Bollywood from '../../Routes/Bollywood';
import StaticPage from '../../Routes/StaticPage';

import Footer from '../../Components/footer/Footer';

function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/:cat" element={<Bollywood/>}/>
        

        <Route path="/:cat/:id" element={<StaticPage/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routers