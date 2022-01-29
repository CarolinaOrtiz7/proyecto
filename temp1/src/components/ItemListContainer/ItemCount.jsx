import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

function ItemCount ({inicial,stock,onAdd}) {

    const [contador, setcontador] = useState (inicial);

    const handleAumentar=()=>{
        if (contador < stock) {
          setcontador(contador + 1)
        }
      }
    
      const handleRestar=()=>{    
        if (contador > inicial) {
          setcontador(contador - 1)
        }
      }
    
      const agregar=()=>{
        onAdd(contador)
      }
    

    return (
        < div className="container w-50">
        <Button bg="dark" variant="dark" style= {{fontSize:'7px'}} onClick={handleRestar}> - </Button>
        {contador}
        <Button bg="dark" variant="dark" style= {{fontSize:'7px'}} onClick={handleAumentar}> + </Button><br></br>
        <br></br>
        <Button className='botonCarrito' bg="dark" variant="dark" onClick={agregar}>Agregar al carrito</Button> 
        </div>
        
  
    )
}

export default ItemCount