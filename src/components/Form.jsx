import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const Form = () => {
  const { cart, precioTotal } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [orderId, setOrderId] = useState(null)
  const total = precioTotal()

  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (direccion !== "" & email !== "" & nombre !== "") { Swal.fire(`Bienvenido/a ${nombre}, te registraste con el mail "${email}", y la dirección ${direccion}. Tu compra fue realizada exitosamente`) 
  
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }
    else if (nombre === "") {
      Swal.fire({
        icon: 'error',
        title: 'Campo nombre vacío',
        text: 'Something went wrong!',
        footer: '<a href="">Volver a completar</a>'
      })

    }
    else if (direccion === "") {
      Swal.fire({
        icon: 'error',
        title: 'Campo dirección vacío',
        text: 'Something went wrong!',
        footer: '<a href="">Volver a completar</a>'
      })
    }
    else if (email === "") {
      Swal.fire({
        icon: 'error',
        title: 'Campo email vacío',
        text: 'Something went wrong!',
        footer: '<a href="">Volver a completar</a>'
      })
    }

    
  }

  const order = {
    Comprador: { nombre, email, direccion },
    Items: cart.map(({ nombre, quantity, precio }) => ({
      nombre, quantity, precio
    })),
    Total: { total }

  }
  const ordersCollection = collection(db, "orden")


  return (
    <div className='Formulario'>
      <h2>Formulario de contacto</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Dirección' onChange={(e) => setDireccion(e.target.value)} />
        <Button type="submit" variant='solid' margin={8} colorScheme='blue'>Enviar</Button>
      </form>
      <h3>Id de tu compra: {orderId}</h3>
      <Button variant='solid' margin={8} colorScheme='blue'>
        <Link to={'/'}>
          Ver más productos
        </Link>
      </Button>

    </div>
  )
}

export default Form