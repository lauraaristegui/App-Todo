import React,{useLayoutEffect, useRef} from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

const Layout = () => {

  const {counter, increment, decrement} =useCounter(1)
  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
  const { quote} = !!data && data[0];
  
   const pTag = useRef()
   

   useLayoutEffect(() => {
     console.log(pTag.current.getBoundingClientRect())
   }, [quote])

  return (
    <>
      <h1>Layout Effect</h1>
      <hr/>
      
      
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>{quote}</p>
      </blockquote>
      
      
      <button onClick={decrement} className="btn btn-primary" >
        Previus Quote
      </button>
      
      <button onClick={increment} className="btn btn-primary ml-5">
        Next Quote
      </button>
     
     
    </>
  )
}

export default Layout;
