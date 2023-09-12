import React from 'react'
import { Box,Card, CardBody, CardFooter, Text, Stack, Divider, Button, ButtonGroup,Heading,Image, Flex,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({ producto }) => {
  return (
    <div className='card'>
      <Card maxW='300' maxH='600' border='solid black' margin='15' >
        <CardBody className='card'>
          <Image
            src= {producto.imageUrl}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='4' spacing='2'>
            <Heading size='md'>{producto.nombre}</Heading>
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
    </div>
  )
}

export default Item