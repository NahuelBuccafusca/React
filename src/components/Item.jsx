import React from 'react'
import { Card, CardBody, CardFooter, Stack, Divider, Button, ButtonGroup, Heading, Image, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({ producto }) => {
  return (
    <Card bg='green.100' maxW='300' maxH='600' border='solid black' margin='15' >
      <CardBody>
        <Image
          src={producto.imagen}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='4' spacing='2' >
          <Heading alignSelf='center' size='md'>{producto.nombre}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent='center'>
        <ButtonGroup spacing='3'>

          <Button variant='solid' colorScheme='blue'>
            <Link to={`/item/${producto.id}`}>
              Detalle
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

  )
}

export default Item