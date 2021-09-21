import React from "react";
import { useState } from 'react' //hooks (built in functions)
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from "@material-ui/icons/Add";
import { EditOutlined } from "@material-ui/icons";
import './App.css';

// TODO Applications
function App() {
  const [todoList, setTodoList] = useState([])  //for adding a data into list we array
  const [text, setText] = useState('')
  // FOR ADD Data
  const addItem = () => {
        const listApp = [...todoList] //for changing reference we use spread operator
        listApp.push(text)
        setTodoList(listApp)
      }
// Delete 
    const deleteList=(value,index)=>{
      const listApp = [...todoList] 
      listApp.splice(index,1)
      setTodoList(listApp)
    }
  return (
    <>
      <div className="centered" align="center" >
        <br />
        <h1 >Todo List</h1>
        <br />
        <input  onChange={(e)=> setText(e.target.value) } type='text' placeholder='Add Items' />
        <button className='add' onClick={addItem} ><AddIcon /></button>
        <ul>
        {
          todoList.map((item,index)=>{
           return <li>{item}
          <button className='edit' ><EditOutlined/></button>
          <button className='delete' onClick={()=>deleteList(index)}> <DeleteIcon /> </button>
           </li>
          })
        }
        </ul>
      </div>
    </>
  );
}
export default App;
        