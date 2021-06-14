import React,{useCallback, useState} from 'react';
import ShowIncrement from './ShowIncrement';

import '../../components/02-useEffect/simpleform.css';



const CallbackHooks = () => {
     
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    }, [setCounter])

  return (
    <div>
    <h1>useCallback Hook: {counter} </h1>
    <hr/>
      <ShowIncrement increment={increment}/>
    </div>
  )
}

export default CallbackHooks
