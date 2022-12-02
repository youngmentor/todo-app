import React from 'react'
import "./App.css"
import {MdDeleteOutline} from "react-icons/md";
const Form = ({todo,item, deleteItem}) => {
  
  return (
    <div className='form_container'>
        
 {todo?.map(
    (item)=>(<p >{item}</p> )) }    
   <div className='delete_button'>
       <MdDeleteOutline onClick={()=>{deleteItem(item)}} />
   </div>
   </div>
  )
}

export default Form