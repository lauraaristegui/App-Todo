import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

import './styles.css';


const init = () =>{

  return JSON.parse(localStorage.getItem('todos')) || [];
 
}

const TodoApp = () => {
//al todoreducer lo hago en un archivo independiente
  const [todo, dispatch] = useReducer(todoReducer, [], init);



 
useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todo))
 }, [todo]);

 //borrar todo
const handleDelete = (todoId) => {
        console.log(todoId)

      const actionDelete = {
        type:'delete',
        payload:todoId
      }
    
      dispatch(actionDelete)
    }

  // hacer fn para marcar como completada la tarea
    
const handleToggle = (todoId) => {
    
      dispatch({
        type:'toggle',
        payload: todoId
      })

    }
const handleAddTodo = (newTodo) => {
       
        dispatch({
        type:'add',
        payload: newTodo
      })

    }


  


  return (
    <div>
    <h1>TodoApp({todo.length})</h1>
    <hr/>
       
    <div className="row">

        <div className="col-7">
          
        <TodoList todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
        </div>
        
        <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo} />
            
        </div>

    </div>
    
    </div>
  )
}

export default TodoApp
