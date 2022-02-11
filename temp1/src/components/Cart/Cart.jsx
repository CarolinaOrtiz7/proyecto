import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const { cartList, vaciarCarrito,borrarItem,sumaTotal } = useCartContext()
  console.log({cartList});

return <div>

{cartList.length !== 0 ?<> (
          <div>
            <h1 className='prodcart'>Productos en Carrito:</h1>
          </div> 
        )


      {
      cartList.map(product => 
        
        <div key={product.id}>
<p>
  <span>{product.nombre}</span> <br></br>
  <span>Precio: ${product.precio}</span> <br></br>
  Cantidad: {product.cantidad}
</p>
<Button className='borrarItem'  bg="dark" variant="dark" onClick={() => borrarItem(product.id)}>x</Button>
</div> )}

{`El total es $ ${sumaTotal()}`}

</>

:

<label>No hay productos en el carrito</label>


      }


<>

        <Button 
          className="VaciarCarrito" 
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>

        <Link to='/'>
    <Button className="seguircomprando">Seguir Comprando</Button>
            </Link>

      </>  

        </div>;
};

export default Cart;