import {React , useState} from 'react'
import './Todo.css';
import {addTodo,removeTodo,deleteTodo} from "../Actions/index";
import {useSelector, useDispatch} from "react-redux";

const Todo=()=>
{
  const [inputData , setInputData] = useState('');
  const list=useSelector((state)=>state.todoReducers.list);
  const Dispatch=useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>ADD YOUR LIST HERE</figcaption>
        </figure>

        <div className="additems">
          <input type="text" placeholder="WRITE ITEM ......."  value = {inputData} onChange={(event) => setInputData(event.target.value)}/>
          <i className="fa fa-fighter-jet" onClick={()=> Dispatch(addTodo(inputData),setInputData(''))}></i>
        </div>

<div className='showItems'>
  {
    list.map((elem)=>{
      return (
        <div className='eachItem' kwy={elem.id}>
    <h3>
      {elem.data}
      
    </h3>
    <div className='todo-btn'>

    
      <i className="fa fa-ban" title="Delete Item" onClick={()=> Dispatch(deleteTodo(elem.id))}></i>
      </div>

  </div>

      )
      
    })
  }
  
</div>

      </div>
    </div>
  )
}

export default Todo