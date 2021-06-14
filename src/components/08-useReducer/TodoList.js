import React from 'react';
//import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';


const TodoList = ({todo, handleToggle, handleDelete}) => {
    return (
        <>
           <ul className="list-group list-group-flush">
         {
             todo.map((t, i) => (
                 // TodoListItem, todo, index, 
                <TodoListItem  key={t.id} todo ={t} index={i} handleDelete={handleDelete} handleToggle={handleToggle} />
             ))
         }
     </ul>   
        
        </>
    )
}
// TodoList.propTypes = {
//     todo : PropTypes.object,
//     handleDelete: PropTypes.func,
//     handleToggle: PropTypes.func
// }
 export default TodoList
