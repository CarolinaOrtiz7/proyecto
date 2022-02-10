import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const { cartList, vaciarCarrito,borrarItem,sumaTotal } = useCartContext()
  console.log({cartList});

return <div>

{cartList.length > 0 && ( 
          <div>
            <h1>Productos en Carrito:</h1>
          </div> 
        )
}

      {cartList.map(product => 
        <div>
          <li className="cart2" >{product.nombre} Precio: {product.precio}       Cantidad: {product.cantidad}
          </li> 
          <button onClick={() => borrarItem(product.item.id)}>x</button>
        </div>)}

        {`la suma es ${sumaTotal()}`}

  



        <Button 
          className="VaciarCarrito" 
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>

        </div>;
};

export default Cart;