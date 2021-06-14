//los hooks no son mas que simples funciones por convención se las empieza con use 
// en este ejemplo estoy creando un hook personalizado
import {useState} from 'react';

// si no me manda nada el valor va a ser de 10
export const useCounter = (intialstate =10) => { //10


    const [counter, setCounter] = useState(intialstate)
    //tambien le puedo agregar un factor
    const increment = () =>{
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () =>{
        setCounter(intialstate)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

// este custom Hook esta extrayendo la lógica de mi contador 
//¿cómo lo utilizo en otro componente?