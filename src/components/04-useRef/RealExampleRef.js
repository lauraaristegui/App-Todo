import React,{useState} from 'react';
import MultipleCutomHooks from '../03-examples/MultipleCutomHooks';

import '../02-useEffect/simpleform.css';

const RealExampleRef = () => {

    

    const [show, setShow] = useState(false);




  return (
    <>
    <h1>Real Example Ref</h1> 
    <hr/> 

    {show &&  < MultipleCutomHooks/>}

    <button
     className="btn btn-primary m-5"
     onClick={()=>{
         setShow(!show)
     }}
    
    >
     Show/Hide      
    </button>     


    </>
   
  )
}

export default RealExampleRef
