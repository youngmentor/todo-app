// import React from 'react'
import React,{useState} from 'react'
import "./Todo.css"
// import {MdDeleteOutline} from "react-icons/md";
import Form from './Form';
import Todo from './Todo';
const App = () => {
    const [state, setState]= useState("");
    const [todo, setTodo]= useState([])

    const handleClick =()=>{
      if (state){
        let newFile ={}
        newFile.id = count +1
        newFile.task= state
        setTodo((curr)=>([...curr, state]))
        setCount((c) => c+1)
      }
        

    }

    const deleteItem =(val)=>{
        const newArray = todo.filter((list)=> list !== val);
        setTodo(newArray)
    }
  return (
    <div className="main">
   <div className="App">
    <div className='title'><h1>My To-do list</h1></div>
  <div className="Header">   
 <div>
  <Todo set={setState} click={handleClick}  />
       {/* <div className='todo_body'>
         <input onChange={(e)=> setState(e.target.value)} type="text" placeholder="  what to do.. " className="t"/>
        <button onClick={handleClick}  type="submit" >Add</button>     
    </div> */}
 </div>
 <Form todo={todo} deleteItem={deleteItem} />
 {/* {    
 todo?.map((item)=>(
   <div className='form'>
   <Form/>
   <div>
       <p className='to-do-item'>{item}</p>
   </div>
   <div className='delete_button' onClick={()=>{deleteItem(item)}}>
       <MdDeleteOutline/>
   </div>
</div>
 ))
 }  */}
</div>
</div>
</div>
  )
}

export default App
