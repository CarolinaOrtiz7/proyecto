import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext()
    
  return <div>
      { cartList.map(product => <li className="cart2">{product.nombre} Precio: {product.precio} Cantidad: {product.cantidad}</li> ) }
        <Button className="VaciarCarrito" onClick={vaciarCarrito} >Vaciar Carrito</Button>
  </div>;
};

export default Cart;

