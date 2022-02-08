import { createContext, useState, useContext } from "react";

const cartContext = createContext([null])

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        setCartList( [ ...cartList, item ] )

        
	}

	function Agregar (item) {
	if(evitarDuplicados(item)) {
		const cambiarCantidad = [...cartList]
		cambiarCantidad.forEach(x => {
			if(x.nombre === item ) {
				x.cantidad += 1
			}
		})
		return setCartList(cambiarCantidad)
	}
	return setCartList([...cartList, {nombre: item, cantidad: 1}])

}

    const evitarDuplicados = (parametro) => {
		const findCartList = cartList.find((i) => {
			return i.nombre === parametro
		})
		return findCartList
	}

	const eliminarUno = (item) => {
		const eliminarItem = [...item]
		const itemEliminado = eliminarItem.filter(x => x.nombre !== item)
		console.log('se ejecuta')
		return setCartList(itemEliminado)
	}

	const borraTodos = () => setCartList([])
	
	
 function vaciarCarrito() {
        setCartList([])
    }

 

 return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
	  Agregar,
	  evitarDuplicados,
	  eliminarUno,
	  borraTodos,
      vaciarCarrito,
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
