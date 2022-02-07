import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading,setLoading] = useState(true);
  const { idProducto } = useParams()

  useEffect(() => {
      
      
          getFetch
          
          .then(res => setProduct(res.find(prod => prod.id === idProducto)))
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
