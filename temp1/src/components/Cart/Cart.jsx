import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import validacion from "./validacion";
import{ 
 
  query, 
  where, 
  documentId, 
  writeBatch, 
  getDocs,
  getFirestore,
  addDoc,
  collection, 
} from 'firebase/firestore';
import { useState } from "react";

const Cart = () => {

  const [id, setId] = useState('')
  const [dataForm, setDataForm] = useState({
      email: '',
      tel: '',
      name: '',
  })

const { cartList, vaciarCarrito,borrarItem,sumaTotal } = useCartContext()
 
        
const realizarCompra = async (e) => {
  e.preventDefault()  

   
  let orden = {}          

  orden.buyer =  dataForm 
  orden.total = sumaTotal();

  orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad
      
      return {
          id, 
          nombre, 
          precio, 
          cantidad
      }   

  })
  

  
  const db = getFirestore()
  const ordersCollection = collection (db,'orders')
  await addDoc( ordersCollection, orden)
  .then(resp => setId(resp.id))



  const queryCollection = collection(db, 'Items')
  

  const queryActulizarStock = query(
      queryCollection, 
      where( documentId() , 'in', cartList.map(it => it.id) )          
  ) 

  const batch = writeBatch(db)

  await getDocs(queryActulizarStock)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
      })
  ))
  .catch(err => console.log(err))
  .finally(() => { 
          setDataForm({
              email: '',
              phone: '',
             name: ''
        })
          
      })    
batch.commit()  

    }

const [errors,setErrors] = useState ({});

const handleChange = (event) => {  
  setErrors(validacion(dataForm));    
  setDataForm({ 
      ...dataForm,
      [event.target.name]: event.target.value
  })
}

console.log(dataForm); 







return <div>
 {id !== '' && `El id de la orden es : ${id} ` }
 
            <br />

{cartList.length !== 0 ?<> 
          <div>
            <h1 className='prodcart'>Productos en Carrito:</h1>
          </div> 
        


      {
      cartList.map(product => 
        
        <div key={product.id}>
<p>
  <span>{product.nombre}</span> <br></br>
  <span>Precio: {product.precio}</span> <br></br>
  Cantidad: {product.cantidad}
</p>
<Button className='borrarItem'  bg="dark" variant="dark" onClick={() => borrarItem(product.id)}>x</Button>
</div> )}

{`El total es $ ${sumaTotal()}`}



<br></br>

<Button bg="dark" variant="dark" onClick={vaciarCarrito} >Vaciar Carrito</Button> <br></br>



      <br/>

      <form className='formulario' onSubmit={realizarCompra}>
<input  className="mb-3"
    type='texto' 
    name='name' 
    placeholder='Ingresa tu nombre' 
    onChange={handleChange}
    value={dataForm.name}
/> <br />
{errors.name && <p className="error">{errors.name}</p>}

<input  className="mb-3" 
    type='numero' 
    name='tel'
    placeholder='tel' 
    onChange={handleChange}
    value={dataForm.tel}
/>
{errors.tel && <p className="error">{errors.tel}</p>}
<br/>
<input   className="mb-3"
    type='email' 
    name='email'
    placeholder='Ingresa tu email' 
    onChange={handleChange}
    value={dataForm.email}
/> 
{errors.email && <p className="error">{errors.email}</p>}
<br></br>
<input  className="mb-3" 
    type='email' 
    name='validarEmail'
    placeholder='Repetir Email' 
    onChange={handleChange}
   
/>
<br/>
<button className="orden" >Generar Orden</button>
</form>

</>
          :
            <> 
                <label>No hay productos en el carrito</label> <br></br>
                <Link to='/'>
    <button className="comprar">  Comprar </button>
            </Link>
            </> 
        
      }

     
        </div>;
};

export default Cart;