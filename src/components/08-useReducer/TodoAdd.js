import React from 'react';
import useForm from '../../hooks/useForm'


const TodoAdd = ({handleAddTodo}) => {

    //useForm
  const [{description}, handleInputChange, reset] = useForm({
    description:''
  })

  const handleSubmit = (e) => {

      e.preventDefault();
      if(description.trim().length <=1){
        return;
      };

      //creo un nuevo toDO
      const newTodo ={
        id: new Date().getTime(),
        desc:description,
        done:false
      }
      handleAddTodo(newTodo);
      reset();
  }

    return (
        <>
          <h4>Add Todo</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="description"
                 className="form-control"
                 placeholder="Learning..."
                 autoComplete="off"
                 onChange={handleInputChange}
                 value={description}
                 />
                 <button 
                   type="submit"
                  className="btn btn-outline-primary mt-1 btn-block"
                 >
                     Add
                 </button>
            </form>    
        
        </>
    )
}

export default TodoAdd
