import  ItemCount  from './ItemCount';
import React, { useEffect, useState } from 'react';
import {getFetch} from '../../helpers/mock';
import Button from 'react-bootstrap/esm/Button';
import { Link, useParams } from 'react-router-dom';




function ItemListContainer () {

    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() =>{

        if (idCategoria) {

            getFetch
        .then(res => setProductos(res.filter(prod=>prod.categoria===idCategoria)))
        .catch(err=>console.log(err))
        .finally(()=> setloading(false))   

        } else {
            
        
    getFetch
    .then(res => setProductos(res))
    .catch(err=>console.log(err))
        .finally(()=> setloading(false))   
        }

    },[idCategoria])

    function onAdd (cant){
        console.log(cant)
    }

    console.log(idCategoria)


    return( 
    
    <div className='menu'>
        { loading ? <h2>Cargando ...</h2> :productos.map ( (prod) => <div

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
      <ItemCount stock={6} inicial={1} onAdd={onAdd} /> <br></br>

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