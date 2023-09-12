import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter, Text, Stack, Divider, Button, ButtonGroup, Heading, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {
  const { id } = useParams()

  const filteredProducts = productos.filter((producto) => producto.id == id)
  
  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
          <Card  margin='3' maxW='lg' border='solid'>
            <CardBody>
              <Image
                src={p.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading  size='lg'>{p.titulo}</Heading>
                <Text>
                  {p.descripcion}
                </Text>
                <Text  alignSelf='center' border='solid' borderRadius='base' color='blue.600' fontWeight='bold' fontSize='2xl'>
                  $ {p.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ItemCount/>
            </CardFooter>
          </Card>
          </div>
        )
      })}

    </>
  )
}

export default ItemDetail