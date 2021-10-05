import React from "react";
import { useState } from 'react' //hooks (built in functions)
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverOutlined';
import { EditOutlined } from "@material-ui/icons";
import './App.css';

  // TODO Applications
function App() {
  const [todoList, setTodoList] = useState([])  //for adding a data into list we array
  const [text, setText] = useState('')  //for inp
  const [toogleBtn,setToogleBtn]=useState(false) //for playing with toogle
  const [currentEditIndex, setCurrentEditIndex] = useState(-1)

  // FOR ADD Data
  const addItem =_=>{
        const listApp = [...todoList] //for changing reference we use spread operator
        listApp.push(text)
        setTodoList(listApp)
        setText('')
      }
    // Delete 
    const deleteList=(val,index)=>{
      const listApp = [...todoList] 
      listApp.splice(index,1)
      setTodoList(listApp)
    }
    const DeleteAll=()=>{
      setTodoList([])
    }
    
    const editItem=(index)=>{
      setText(todoList[index]);
      setToogleBtn(true)
      setCurrentEditIndex(index)
    }
    const updateItem = () =>{
      const listApp = [...todoList];
      listApp[currentEditIndex]=text
      setTodoList(listApp);
      setToogleBtn(false);
      setText('')
      setCurrentEditIndex();
    }

    return (
      <div className="centered" align="center" >
        <br />
        <h1 >Todo List</h1>
        <br />
        <input  onChange={(e)=> setText(e.target.value)  }  value={text} type='text' placeholder='Add Items' />
        {
          toogleBtn?<button className='edit' onClick={updateItem} ><EditOutlined/></button>:
          <button className='add' onClick={addItem} ><AddIcon /></button>
        }
        
        <ul>
        {
          todoList.map((item,index)=>
          {
           return <li key={index}>
           {item}
          <button className='edit' onClick={()=>editItem(index)} ><EditOutlined/></button>
          <button className='delete' onClick={()=>deleteList(index)}> <DeleteIcon /> </button>
           </li>
          })
        }
        </ul>
        <div className='deleteAll' onClick={DeleteAll} align='center'><DeleteForeverIcon/></div>
      </div>
  );
}
export default App;