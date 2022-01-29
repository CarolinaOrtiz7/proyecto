import React,  { useEffect, useState } from 'react';
import {getProductos} from '../helpers/mock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [producto,setProductos] = useState({});
  const idproducto = 1;
    
  useEffect(() => {
    getProductos()
      .then((data) => {
        setProductos (data.find((ItemDetail) => ItemDetail.id === idproducto));
      })
      .catch((err) => console.log(err));
  }, []);

  return (

  <>       
    
    <ItemDetail producto={producto} />

    </> 
    );
};

export default ItemDetailContainer;
