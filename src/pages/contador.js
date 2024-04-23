import React,{useState} from 'react'
import Button from '@/components/Button'

function contador() {

 /*   let contador = 0*/

 const [contador,setContador] = useState(0)


    function incrementa(){
       setContador(contador+1)
        console.log(contador)
    }

  return (
    <div>
    
    <p> Contador: {contador}</p>

    <Button color="green" onClick={incrementa}>Incrementar</Button>
    </div>
  )
}

export default contador