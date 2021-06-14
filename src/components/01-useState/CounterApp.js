import React,{useState} from 'react'
import './counter.css'

const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    })
    //desesctructuro los obj en una constante
   const {counter1, counter2} = counter;

  const handleCounter = () => {
     setCounter({
         //traigo el estado anterior para no perderlo
         ...counter,
         counter1: counter1 + 1,

     })
  }
    return (
        <>
         <h1>Counter {counter1}</h1>  
         <h1>Counter {counter2}</h1>  
         <hr/>

         <button className="btn btn-primary" onClick={handleCounter}>
             +1
         </button>
     
        </>
    )
}

export default CounterApp
