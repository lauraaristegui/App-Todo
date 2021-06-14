import React,{memo} from 'react'
// memo sierve solo para memorizar algo, en este caso el compomemte 
// se va a renderizar si sus propiedades cambian 
    const Small = memo(({value}) => {
        
        console.log('me volví a mostrar :(')

  return (
    <small>
      {value}
    </small>
  )
}
)
export default Small
