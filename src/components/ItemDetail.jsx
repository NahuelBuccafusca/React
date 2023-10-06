
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter, Text, Stack, Divider, Heading, Image } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({ producto, id, nombre, precio }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
      id, nombre, precio
    }

    addItem(item, quantity)

  }
  return (
    <Card bg='green.100' margin='3' maxW='lg' border='solid'>
      <CardBody>
        <Image
          src={producto.imagen}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='lg'>{producto.nombre}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
          <Text color='white' bg='red.500' alignSelf='center' borderRadius='base' fontWeight='bold' fontSize='2xl'>
            $ {producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {
          quantityAdded > 0 ? (
            <div className='finalizar'>
              <Link to='/Cart'> Finalizar Compra</Link>

              <Link to="/">
                Volver a ver productos
              </Link>
            </div>

          )

            : (
              <ItemCount initial={1} stock={50} onAdd={handleOnAdd} />)
        }
      </CardFooter>
    </Card>

  )

}


export default ItemDetail