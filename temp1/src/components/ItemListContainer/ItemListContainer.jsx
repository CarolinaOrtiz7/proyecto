
import React, { useEffect, useState } from 'react';
import {collection, getDocs, getFirestore,query, where} from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner'

import { Link, useParams } from 'react-router-dom';




function ItemListContainer () {

    const [productos, setProductos] = useState([]);
   
    const [cargando, setCargando] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() =>{

           
        const db = getFirestore()
        const queryCollection = collection(db, 'Items')        
             
        const queryFiltro = !idCategoria ? 
            queryCollection                
        : 
            query(queryCollection, 
                where('categoria', '==', idCategoria)                
            )  

        getDocs(queryFiltro)
        .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))            
                   




    },[idCategoria])

    




    return( 
    
    <div className='menu'>
        { cargando ? <Spinner animation="border" variant="primary" /> 
        
        :productos.map ( (prod) => <div

        key={prod.id} >

        
      <div className='cartItem'>
     <div >
           {`${prod.nombre}`}
        </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className="photos" /><br></br>
                   $ {prod.precio} <br></br>
                    
      </div>
      <div className='cartItem-left'>
    

      <div >
          <Link to={`detalle/${prod.id}`}>
           <button className='detalle'>Detalle</button>
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