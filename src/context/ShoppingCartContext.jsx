import { useState, createContext } from 'react'


export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  console.log(cart)


  const addItem = (item, quantity) => {
    let newCart;
    let product = cart.find(product => product.id === item.id)
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart)
  }

  const removeItem = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  }
  const clearCart = () => {
    setCart([])
  }

  const precioTotal = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  }
  const totalUnidades = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, precioTotal, totalUnidades }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider