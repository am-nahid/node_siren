import React, { useContext,useState, useEffect } from 'react'
import { host } from '../../Components/constants/Constants';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import GeneralHeading from '../../Components/Heading';
import Advertisement from './Advertisement'


function TopPPost() {
    // const [Data]=useContext(AppData);
    const [data,setData]= useState([])
    const navi =useNavigate();

    const handleImg=(d)=>{
        navi(`/${d.cat}/${d.id}` )
    }

    useEffect(()=>{
        const Api =`${host}/api/all-data`
        axios.get(Api)
        .then((result)=>setData(result.data))
        .catch(err=>console.log('error in fetching the data',err))
     
     },[])

  return (
    <div className='toppostcontainer'>
        <div className='Advertisement'>
        <Advertisement/>
        </div>
        <GeneralHeading HeaderText={"TopPost"}/>
        
       { data.filter((item)=> item.sp==="Home-TopPostA").map((d)=>(
        <div key={d.id}>
        <img src={d.img} onClick={()=>handleImg(d)} className='topimg' alt="No Network"/>
        <div><h2 onClick={()=>handleImg(d)} className='toptitle1'>{d.title}</h2></div>
        {/* <div className='topoverview'>{d.overview}</div> */}
        
            <div className='datecat1'><span>{d.cat}</span ><span className='date'>{d.date}</span></div>
            <hr className='line'/>
        </div>
        
       ))}

       {
        data.filter((item)=>item.sp ==="Home-TopPostB" ).map((d)=>(
            <div key={d.id}>
                <div className='verticalflex'>
                <div className='toppostlast'>
            <img src={d.img} alt="No Network" onClick={()=>handleImg(d)} className='topimage' />
            <div>
            <div><h2  alt="No network"onClick={()=>handleImg(d)}>{d.title}</h2></div>
            {/* <div >{d.overview}</div> */}
            
                <div className='catdate'><span>{d.cat}</span><span className='date'>{d.date}</span></div>
                </div>
                </div>
                </div>
                <hr className='line'/>
            </div>
        ))
       }
    </div>
  )
}

export default TopPPost