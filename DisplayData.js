import React from 'react'
import Inputcontainer from './Inputcontainer'
import Update from './Update'

export default function DisplayData({todos,deleteNote}) {
    const state = true;
  return (
    <div >
      <ul className='note'>
      {
        todos.map((item,index)=>{
            return(
                <div className='listitem'>
                    <li key={index}>
                    {item}
                    <button className='btn1'  onClick={()=>deleteNote(item)} >Delete</button>
                    <button className='btn1' onClick={()=>{}}>updata</button>
                </li>
                </div>

            )
        })
      }
      </ul>
    </div>
  )
}
