import React from 'react';

//utilizo el custom Hook
import {useCounter} from '../../hooks/useCounter';

import './counter.css';



export const CounterWidthCustomHook = () => {
    // desestructuro el objeto que retorna  useCounter
    const {state, increment, decrement, reset}=useCounter(200); // si no le paso argumento toma por defecto el que declare en el customHook

    return (
        <>
         <h1>Counter with Hook: {state}</h1>   
         <hr/>

         <button onClick={()=>increment(2)} className="btn">+1</button>
          <button onClick={reset} className="btn">Reset</button>
         <button onClick={() => decrement(2)} className="btn">-1</button>
        </>
        
    )
}

export default CounterWidthCustomHook
