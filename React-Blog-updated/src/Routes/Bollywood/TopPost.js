import React, { useContext, useState, useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';
import "../../App.css"
import Advertisement from '../../Components/Advatisement/Advertisement';
import { host } from '../../Components/constants/Constants';
import axios from 'axios'

function TopPost() {
  // const [data] = useContext(AppData);
  const navi =useNavigate();
  const {cat} = useParams()

  const [data,setData]= useState([])

  useEffect(()=>{
    const Api =`${host}/api/blog/${cat}`
    axios.get(Api)
    .then((result)=>setData(result.data))
    .catch(err=>console.log('error in fetching the data',err))
 
 },[cat])
    
    const Filter =data.filter((item)=>item.for ==="TopPostmain" );
    // const Filter =data.filter((item)=>item.cat==="Bollywood" && item.for ==="TopPostmain" );
    // const Filter2 =data.filter((item)=>item.cat==="Bollywood" && item.for ==="TopPost" );
    // const Filter2 =data.filter((item)=>item.cat==="Bollywood"  );
    const handleNav=(d)=>{
      navi(`/${d.cat}/${d.id}`, { state: d });
    }
  return (
    
    <>
  <div className='Toppost'>
         <div>
       <GeneralHeading HeaderText={'TopPost'}/>
       {Filter.map((d)=>(
            <div key={d.id} className='toppostflex'>
              
            <div >
            <img className='toppostimg' src={d.img} onClick={()=>handleNav(d)}/>
            </div>
            <div className='topposttitle'>
            <p className='titletoppost' onClick={()=>handleNav(d)}>{d.title}</p>
           
            
                 <span className='toppostcat'>{d.cat}</span>
                 <span className='date'>{d.date}</span>
                 </div>
                 
            </div>
            
        ))}
</div>

 <div>

 <div>
          <hr className='line3'/>
          </div>
          <div className='toppostflexcontainer'>
   
                {data.slice(6,10).map((d)=>(
                 
            <div key={d.id} className='toppostflexcard'>
              
            <div className='toppostflex2'>
            <img className='toppostimg2' src={d.img} onClick={()=>handleNav(d)}/>
            <div className='topposttitle2'>
                  <div> <p className='title' onClick={()=>handleNav(d)}>{d.title}</p></div>
            
                 <div>  <span className='toppostcat2'>{d.cat}</span>
                 <span className='datetop'>{d.date}</span></div>
                 
                 
                </div>
                </div>
               

             {/* <hr className='line3'/>  */}
                
            </div>

            
        ))}
        </div>
        
        <Advertisement/>
    </div>
    </div>

    </>
  )
}

export default TopPost