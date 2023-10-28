import React, { useContext,useState, useEffect } from 'react'
import { host } from '../../Components/constants/Constants';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';

function Latest() {
    // const [Data]=useContext(AppData);
    const [data,setData]= useState([])
    const navi=useNavigate();


    useEffect(()=>{
      const Api =`${host}/api/all-data`
      axios.get(Api)
      .then((result)=>setData(result.data))
      .catch(err=>console.log('error in fetching the data',err))
   
   },[])

   
   const handleClick=(d)=>{
    console.log(d.cat);
    navi(`/${d.cat}/${d.id}`)
}

  return (
    <div>
     <GeneralHeading HeaderText={"The Latest"}/>
     <div className='latestbox'>
      
     {data.filter((item)=>item.sp==="latest").map((d)=>(
        <div className='latestcard' key={d.id}>
        <img src={d.img} onClick={()=>{handleClick(d)} }alt="no network" className='latestimg' />
       <div> <h2 onClick={()=>handleClick(d)} className='latesttitle'>{d.title}</h2></div>
       <div className='latestbox2'>
       <div ><p className='latestoverview'>{d.overview}</p></div>
       <p className='catdate'> <span>{d.cat}</span><span className='date'>{d.date}</span></p>
       </div>
       </div>
     
     ))}
     
     </div>
    </div>
  )
}

export default Latest