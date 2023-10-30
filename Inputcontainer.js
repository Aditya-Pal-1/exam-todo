import React, { useState } from 'react'
import '../App.css';

export default function Inputcontainer({addNote}) {
    const [inputvalue , setInputvalue] = useState("");
    // const [data ,setdata] = useState({id:"",text:""});
    // const handle =(e)=>{
    //     setdata(e.target.value)
    // }
  return (
    <div className='inputarea'>
      <input type="text" value={inputvalue} placeholder='Enter your task'onChange={(e)=>setInputvalue(e.currentTarget.value)}  />
      <button className='btn' onClick={()=>{
        addNote(inputvalue)
        setInputvalue("")
        }}>Add task</button>
    </div>
  )
}
