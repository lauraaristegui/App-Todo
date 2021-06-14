import React, {useEffect} from 'react'
import useForm from '../../hooks/useForm';

import './simpleform.css';


export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    })
    //desectructuro el obj formState para trabajar mas comoda
    const {name, email, password} = values;

    useEffect(() => {
        console.log('El email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit}>
         <h1>FormWithCustomHook</h1>   
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
         <div>
           <input
           type="password"
           name="password"
           className="form-control"
           placeholder="*******"
           value={password}
           onChange={handleInputChange}           
           />
       </div>
         <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

