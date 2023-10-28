import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import { host } from '../../Components/constants/Constants';
import axios from 'axios'


import { useNavigate } from 'react-router-dom';

function Banner() {
    // console.log("hii")
    // const [Data] =useContext(AppData)
    // console.log(Data)
    const [data,setData]= useState([])
    const navi =useNavigate();

    useEffect(()=>{
      const Api =`${host}/api/all-data`
      axios.get(Api)
      .then((result)=>setData(result.data))
      .catch(err=>console.log('error in fetching the data',err))
   
   },[])

    const Filter1=data.filter(
        (item)=> item.sp === "home-banner"
        );
    const Filter2=data.filter(
        (item)=> item.sp === "home-ban"
        );

    const handleImg=(d)=>{
         navi(`/${d.cat}/${d.id}`)
    }
  return (
    <div className='imageContainer'> 
      {/* <div> */}
        { Filter1.map((d)=>(
        <img key={d.id}  onClick={()=>handleImg(d) } alt="no Network"  className="FirstImg"src={d.img} />

        ))}
        {/* </div> */}
        {/* <div> */}
        {
            Filter2.map((d)=>(
                <img key={d.id} onClick={()=>handleImg(d)} alt="no network "  className="secondImg"src={d.img}/>
            ))
        }
        {/* </div> */}
    </div>
  )
}

export default Banner