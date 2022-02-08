import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()
  console.log({cartList});

return <div>
         
    
    {cartList.length > 0 && ( 
        <div>
          <h1>Productos en Carrito:</h1>
        </div> 
      )
    }

    {cartList.map(product => (
      <ul key={product.id} >
        <li className="cart2" >{product.nombre} Precio: {product.precio}       Cantidad: {product.cantidad}
        </li> 
      </ul>)) 
    }
      
   
        <Button 
          className="VaciarCarrito" 
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>

  </div>;
};

export default Cart;