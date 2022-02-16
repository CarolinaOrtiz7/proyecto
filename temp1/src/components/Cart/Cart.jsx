import Button from "react-bootstrap/esm/Button";

import { useCartContext } from "../../context/CartContext";

import{getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  documentId, 
  writeBatch, 
  getDocs, 
} from 'firebase/firestore';
import { useState } from "react";

const Cart = () => {

  const [id, setId] = useState('')
  const [dataForm, setDataForm] = useState({
      email: '',
      tel: '',
      nombre: '',
  })

const { cartList, vaciarCarrito,borrarItem,sumaTotal } = useCartContext()
 
        

const realizarCompra = async (e) => {
  e.preventDefault()  

  let orden = {}  

  orden.buyer =  dataForm 
  orden.total = sumaTotal();

  orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.item.nombre;
      const precio = cartItem.item.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad
      
      return {
          id, 
          nombre, 
          precio, 
          cantidad
      }   
  }) 
  
  const db = getFirestore()
  const ordersCollection = collection (db, 'orders')
  await addDoc ( ordersCollection, orden)
  .then(resp => setId(resp.id))

  const queryCollection = collection(db, 'Items')
        

  const queryActulizarStock = query(
      queryCollection, 
      where( documentId() , 'in', cartList.map(it => it.item.id) )          
  ) 

  const batch = writeBatch(db)

  await getDocs(queryActulizarStock)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
      })
  ))
  .catch(err => console.log(err))
  .finally(() => { 
          setDataForm({
              email: '',
              tel: '',
              nombre: '',
          })
          vaciarCarrito()
      })    
batch.commit()  

}

const handleChange = (event) => {      
  setDataForm({ 
      ...dataForm,
      [event.target.nombre]: event.target.valor
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
  <span>Precio: ${product.precio}</span> <br></br>
  Cantidad: {product.cantidad}
</p>
<Button className='borrarItem'  bg="dark" variant="dark" onClick={() => borrarItem(product.id)}>x</Button>
</div> )}

{`El total es $ ${sumaTotal()}`}



</>
          :
            <> 
                <label>No hay productos en el carrito</label> <br></br>
                <Button onClick={vaciarCarrito} >Vaciar Carrito</Button> <br></br>
            </> 
        
      }

      <br/>

      <form 
onSubmit={realizarCompra}                           
>
<input 
    tipo='texto' 
    nombre='nombre' 
    placeholder='nombre' 
    onChange={handleChange}
    valor={dataForm.nombre}
/>
<br />
<input 
    tipo='numero' 
    name='tel'
    placeholder='tel' 
    onChange={handleChange}
    valor={dataForm.tel}
/>
<br/>
<input 
    tipo='email' 
    nombre='email'
    placeholder='email' 
    onChange={handleChange}
    valor={dataForm.email}
/> <br></br>
<input 
    tipo='email' 
    nombre='validarEmail'
    placeholder='Repetir Email' 
    onChange={handleChange}
   
/>
<br/>
<Button>Generar Orden</Button>
</form>



     
        </div>;
};

export default Cart;