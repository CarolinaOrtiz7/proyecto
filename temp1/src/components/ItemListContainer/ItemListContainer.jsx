import  ItemCount  from './ItemCount';
import React, { useEffect, useState } from 'react';
import {getProductos} from '../helpers/mock';
import Button from 'react-bootstrap/esm/Button';
import { Link, useParams } from 'react-router-dom';




function ItemListContainer () {

    const [productos, setProductos] = useState([]);
    const [bool,setBool] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() =>{

        if (idCategoria) {

            getProductos
        .then(res => setProductos(res.filter(prod=>prod.categoria===idCategoria)))
        .catch(err=>console.log(err))
       
        } else {
            
        
    getProductos
    .then(res => setProductos(res))
    .catch(err=>console.log(err))
     
        }

    },[idCategoria])

    function onAdd (cant){
        console.log(cant)
    }

    
    return( 
    
    <div className='menu'>
        {productos.map ( (prod) => <div

        key={prod.id} >

        
      <div className='cartItem'>
     <div >
           {`${prod.nombre}`}
        </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className="photos" /><br></br>
                    {prod.precio}
      </div>
      <div className='cartItem-left'>
      <ItemCount stock={10} inicial={1} onAdd={onAdd} /> <br></br>

      <div >
          <Link to={`detalle/${prod.id}`}>
           <Button className='detalle'>Detalle</Button>
           </Link>
                
        </div> 
        </div>
    </div>


</div>
        )}

      
        
    </div>
    )

}

export default ItemListContainer