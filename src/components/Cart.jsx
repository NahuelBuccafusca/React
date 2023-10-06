import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { Button } from '@chakra-ui/react'

const Cart = () => {
  const { cart, clearCart, precioTotal, totalUnidades } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className='vacio'>
        <h2>Todavia no hay elementos en el carrito</h2>
        <Button variant='solid' margin={8} colorScheme='blue'>
          <Link to="/">
            Volver a ver productos
          </Link>
        </Button>
      </div>
    )
  }
  return (
    <div className='carrito' >
      {cart.map((p) => <CartItem key={p.id} cart={p} />)}
      <h3>Total de unidades de la compra: {totalUnidades()} unidades</h3>
      <h3>Total de su compra: ${precioTotal()}</h3>
      <Button variant='solid' colorScheme='blue'>
        <Link to='/Form'>Confirmar compra</Link>
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={clearCart}>Vaciar Carrito</Button>
    </div>
  )
}

export default Cart