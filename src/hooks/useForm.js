import {useState} from 'react'


const useForm = (initialState = {}) => {
 //quiero manejar el uso de mi estado tal como lo tengo en el otro componente
 const [formValue, setFormValue] = useState(initialState);

  const reset = () => {
      setFormValue(initialState)
  }

 const handleInputChange = ({target}) => {
     setFormValue({
         ...formValue,
         [target.name]:target.value
     });
 }
  return [formValue, handleInputChange, reset]
}

export default useForm
