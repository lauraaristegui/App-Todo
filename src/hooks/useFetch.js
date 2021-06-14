import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
  
   const isMounted = useRef(true);
    
   const [state, setstate] = useState({data:null, loading:true, error:null})

   useEffect(() =>{
     // cuando se limpie el componente el estado actual de current va a ser falso, es decir no se va a renderizar
     return () => {
       isMounted.current = false;
     }
   },[])


   useEffect(()=>{
     //puedo poner de nuevo el setState acá para que apareca cada que cambie el estado
     setstate({data:null, loading:true, error:null})
       //hago la peticion get
       fetch(url) // esto devuelve una promesa
       .then(resp => resp.json())//con la respuesta.json y otra promesa
       .then(data => {

        if(isMounted.current){
           //callack que realiza el cambio de estado
          setstate({
              loading:false,
              error:null,
              data:data
          })
        }
         
       })
 //quiero que se ejecute solo cuando el url cambia (url pasado por argumento a useFetch)
   },[url])
     return state;
}


