import React,{useState, useEffect} from 'react'
import Message from './Message';

import './simpleform.css';


const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    //desectructuro el obj formState para trabajar mas comoda
    const {name, email} = formState;

// se va a renderizar cada que se cargue el componente a menos que le indique que se renderize cuando hayaun cambio
        useEffect(()=>{
            // console.log('hey!')
        },[])
         useEffect(()=>{
            // console.log('formState cambió')
        },[formState])
         useEffect(()=>{
            // console.log('email cambió')
        },[email])

        const handleInputChange = ({target}) => {
          setFormState({
              ...formState,
              [target.name]:target.value
          })
        }
    return (
        <>
         <h1>UseEffect</h1>   
         <hr/>
       <div>
           <input
           type="text"
           name="name"
           className="form-control"
           placeholder="your name"
           value={name}
           onChange={handleInputChange}
           autoComplete="off"
           
           />
       </div>
         <div>
           <input
           type="text"
           name="email"
           className="form-control"
           placeholder="your email"
           value={email}
           onChange={handleInputChange}
           autoComplete="off"
           
           />
       </div>
       {name==='123' && <Message/>}
        </>
    )
}

export default SimpleForm
