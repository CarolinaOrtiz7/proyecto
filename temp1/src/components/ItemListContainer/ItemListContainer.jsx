import  ItemCount  from '../ItemCount';
import Button from 'react-bootstrap/esm/Button';
import React, { useEffect, useState } from 'react';
import { getFetch } from '../Helpers/mock';




function ItemListContainer () {

    const [productos, setProductos] = useState([]);
    const [bool,setBool] = useState(true)

    useEffect(() =>{
    getFetch
    .then(res => setProductos(res))
    

    },[])

    function onAdd (cant){
        console.log(cant)
    }

    
    return( 
    
    <div>
        {productos.map ( (prod) => <div

        key={prod.id} >

        
      <div className='cartItem'>
     <div className="controls">
           {`${prod.name}-${prod.categoria}`}
        </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className="5px" /><br></br>
                    {prod.price}
      </div>
      <div className='cartItem-left'>
      <ItemCount stock={10} inicial={1} onAdd={onAdd} /> <br></br>
           <Button bg="dark" variant="dark">Agregar al carrito</Button>
                
        </div>
      </div> 
    </div>



        )}

        <button onClick={()=> setBool(!bool)}>click</button><br />
        
    </div>
    )

}

export default ItemListContainer