import { createContext, useState, useContext } from "react";

const cartContext = createContext([null])

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        setCartList( [ ...cartList, item ] )

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

    function vaciarCarrito() {
        setCartList([])
    }

 

 return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
