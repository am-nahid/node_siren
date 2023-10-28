import React, { useContext, useEffect, useState } from 'react'
import '../../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';
import { host } from '../../Components/constants/Constants';
import axios from 'axios'


function FuncBollywood() {

  // const [Data]=useContext(AppData);
  const {cat} = useParams()

  const [data,setData]= useState([])
  const navi =useNavigate()
// console.log(cat);

useEffect(()=>{
   const Api =`${host}/api/blog/${cat}`
   axios.get(Api)
   .then((result)=>setData(result.data))
   .catch(err=>console.log('error in fetching the data',err))

},[cat])
// console.log(data);
  const handleNav=(d)=>{
    // navi(`/${d.cat}/${d.id}`, {state:d})
    // console.log(d.cat,d.id);
    // const Api =`${host}/api/blog/detail`
    // axios.post(Api,{cat:d.cat,id:d.id})

    navi(`/${d.cat}/${d.id}`)
  }

  // const FilteredData = data.slice
  return (
    
    <div className='BollywoodContainer'>
      
      <div className='subcontainer'>
        <GeneralHeading HeaderText={`${cat}`}/>
        
    {
      // Data.filter((item)=>item.cat==="Bollywood").slice(0,7).map((d)=>(
data.slice(0,7).map((d)=>(
        <div key={d.id}  >
         <div className='BBcontainer'>
          <div className='imagebox'>
         <img src={d.img} alt="no network"  onClick={()=>handleNav(d)} className='image'/>
         </div>
        
         
         <div className='textcontainer' >
         <h1 className='titles' onClick={()=>handleNav(d)}>{d.title}</h1>
         
         <div className='overviewcat'>
         <p className='overview'>{d.overview}</p>
         <p className='cat'>
          <span>{d.cat}</span>
          
         <span className='date'>{d.date}</span>
        
         </p>
         </div>
         </div>
           </div>
           { 
           d.id !==7 && 
           <div>
           <hr className='line2'/>
           </div>}
        </div>
        
      ))
    }
    </div>
  
  </div>
  )
}

export default FuncBollywood