import React from 'react'

const Todo = ({handleClick,setState }) => {

  return (
    <div className='todo_main'>
       
       <div className='todo_body'>
         <input onChange={(e)=> setState(e.target.value)} 
         type="text" 
         placeholder="  what to do.. " 
         className="t"/>
        <button 
        onClick={handleClick}  
        type="submit" >Add</button>     
 </div>
    </div>
  )
}

export default Todo