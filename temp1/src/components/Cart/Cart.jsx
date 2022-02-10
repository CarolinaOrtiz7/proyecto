import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const { cartList, vaciarCarrito,borrarItem,sumaTotal } = useCartContext()
  console.log({cartList});

return <div>

{cartList.length > 0 && ( 
          <div>
            <h1 className='prodcart'>Productos en Carrito:</h1>
          </div> 
        )
}

      {
      cartList.map(product => 
        <>
        <div key={product.id}>
<p>
  <span>{product.nombre}</span> <br></br>
  <span>Precio: ${product.precio}</span> <br></br>
  Cantidad: {product.cantidad}
</p>
<Button className='borrarItem'  bg="dark" variant="dark" onClick={() => borrarItem(product.id)}>x</Button>
</div>

</>

 

)}

  
{`El total es $ ${sumaTotal()}`}






        <Button 
          className="VaciarCarrito" 
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>

        </div>;
};

export default Cart;