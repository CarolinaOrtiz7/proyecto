import { Link } from 'react-router-dom';

import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemListContainer/ItemCount";


const ItemDetail = ({product}) => {
   
    const [contador,setContador] = useState (0);
    const { cartList, agregarAlCarrito } = useCartContext()

    function onAdd(cant) {
    setContador(cant)
        agregarAlCarrito( {...product, cantidad: cant} )
        
    }

    console.log(cartList)


    

return <div>
      <div className="row">
      <div className="col">
          <div className="container">
              <h3>{product.nombre}</h3> 
              <img src={product.foto} alt='' className='fotodetalle'/><br></br>
              <h3 className="descripcion">{product.descripcion}</h3><br></br> 
          </div>
      </div>
      <div className="contador">
          {
contador === 0 ?

          <ItemCount onAdd={onAdd} inicial={1} stock={6}/> 
:
 <>
<Link to='/cart'>
     <button className="terminar">Terminar compra</button>
     </Link> 
        <Link to='/'>
    <button className="seguir">Seguir Comprando</button>
            </Link>
                        </>
                        




}
          
      </div>
      </div>

</div>;
};

export default ItemDetail;
