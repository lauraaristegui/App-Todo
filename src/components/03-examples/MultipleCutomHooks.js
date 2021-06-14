import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import '../02-useEffect/simpleform.css'

const MultipleCutomHooks = () => {

  const {counter, increment, decrement} =useCounter(1)
  console.log(increment)
    //url que pasa por parametros, useFetch regresa un state
   const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

     //console.log(loading)

     //de data extraigo el author y quote y valido que exista
    
    const {author, quote} = !!data && data[0];
    console.log(author, quote)


  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      
      {
          loading ?
          (<div className="alert alert-info text-center">
          Loading....
      </div>)
             :
      
          ( <blockquote className="blockquote text-right">
        <p className="mb-0">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>)
      }
      
      <button onClick={decrement} className="btn btn-primary" >
        Previus Quote
      </button>
      
      <button onClick={increment} className="btn btn-primary ml-5">
        Next Quote
      </button>
     
     
    </>
  )
}

export default MultipleCutomHooks
