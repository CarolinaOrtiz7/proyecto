import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext()
    
  return <div>
      { cartList.map(product => <li>{product.nombre} precio: {product.precio} cantidad: {product.cantidad}</li> ) }
        <Button onClick={vaciarCarrito} >Vaciar Carrito</Button>
  </div>;
};

export default Cart;

