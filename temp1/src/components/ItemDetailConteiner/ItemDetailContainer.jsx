import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading,setLoading] = useState(true);
  const { idProducto } = useParams()

  useEffect(() => {
      
    const db = getFirestore()
           const itemRef = doc(db, 'Items',idProducto) 
        getDoc(itemRef)
         .then(resp => setProduct( { id: resp.id, ...resp.data() } ))

          .catch(err => console.log(err))
           .finally(()=> setLoading (false))

   
  }, [idProducto])

  console.log(product)
  
  return (

    
      <>
       {loading ?

       <h2> Cargando...</h2>
       :
     
       <ItemDetail product={product} />

          

       }
      </>
      );
};

export default ItemDetailContainer;
