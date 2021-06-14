import React,{useRef} from 'react';
import '../02-useEffect/simpleform.css'

const FocusScreen = () => {

const inputRef = useRef()

 // formas de acceder al focus del dom
 const handleClick = () => {
 //document.querySelector('input').select();
 //inputRef  hace referencia al form del input
 inputRef.current.select();
 console.log(inputRef)
 }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
            ref={inputRef} 
            className="form-control"
             placeholder="your name..."
           
      />

      <button 
      className="btn btn-outline-primary mt-5"
      onClick={handleClick}
      >
          Focus
      </button>


    </div>
  )
}

export default FocusScreen
