import React,{useState, useMemo} from 'react';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/simpleform.css';

const MemoHook = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)
    
    const procesoPesado = (iteraciones) => {
        for(let i = 0; i<iteraciones; i++){
            console.log('Ahi vamos')
        }
        return `${iteraciones} iteraciones realizadas`;

    }
    
      const memoProcesado = useMemo(() => procesoPesado(counter), [counter]) 

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter:<small>{counter}</small> </h3>
      <hr/>
       
       <p>{memoProcesado}</p>
      <button
      className="btn- btn-primary"
      onClick={increment}
      >
         +1
      </button>
       <button
      className="btn- btn-outline-primary ml-3"
       onClick={()=>{
           setShow(!show)
       }}
      >
         Show/hide {JSON.stringify(show)}
      </button>


     </>
    
  )
}

export default MemoHook;


