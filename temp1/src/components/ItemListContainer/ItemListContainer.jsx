
import React, { useEffect, useState } from 'react';
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore';
import {getFetch} from '../../helpers/mock';
import Button from 'react-bootstrap/esm/Button';
import { Link, useParams } from 'react-router-dom';




function ItemListContainer () {

    const [productos, setProductos] = useState([]);
   
    const [loading, setloading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() =>{

        const db = getFirestore()

        const queryCollection = collection(db, 'Items')


    
      getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
        .catch((err) => console.log(err))
        .finally(() => setloading(false) )



       // const itemref = doc(db,'Items','wM3gB96cU733QB2bBuB7')


       // if (idCategoria) {

       //     getFetch
       // .then(res => setProductos(res.filter(prod=>prod.categoria===idCategoria)))
      //  .catch(err=>console.log(err))
      //  .finally(()=> setloading(false))   

      //  } else {
            
        
    //getFetch
     //.then(res => setProductos(res))
    //.catch(err=>console.log(err))
     //   .finally(()=> setloading(false))   
     //   }

    },[idCategoria])

    function onAdd (cant){
        console.log(cant)
    }




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
                    {prod.precio} <br></br>
                    <h4 className="descrip">{prod.descripcion}</h4><br></br> 
      </div>
      <div className='cartItem-left'>
    

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