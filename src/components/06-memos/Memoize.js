import React,{useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import Small from './Small'

const Memoize = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)


  return (
    <>
      <h1>Counter: <Small value={counter}/></h1>
      <hr/>

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

export default Memoize
