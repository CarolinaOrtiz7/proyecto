import { createContext, useState, useContext } from "react";

const cartContext = createContext([null])

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);
	console.log({cartList});

    const agregarAlCarrito = (item) =>{

		if(evitarDuplicados(item)) {

			const cambiarCantidad = [...cartList]
				
				cambiarCantidad.forEach(x => {
					if(x.nombre === item.nombre ) {
						x.cantidad += item.cantidad
					}
				})
				
			return setCartList(cambiarCantidad)
		
		} else {
			setCartList( [ ...cartList, item] )
		}
	}

    const evitarDuplicados = (parametro) => {

		const findCartList = cartList.some((i) => {
			return i.nombre === parametro.nombre
		})
		return findCartList
	}

	const sumaTotal = () => {
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.precio * prod.cantidad)  ,0)
    }

	const cantidad = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
    }


	const borrarItem = (id) => { 
        setCartList( cartList.filter( prod => prod.id !== id ) )
    }


	function vaciarCarrito() {
        setCartList([])
    }

return ( <cartContext.Provider value={{
    cartList,
    agregarAlCarrito,
	sumaTotal,
	borrarItem,
	cantidad,
	vaciarCarrito,
}}>
        {children}
  </cartContext.Provider>)
}

export default CartContextProvider;