import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartItem = ({ cart }) => {
    const { removeItem } = useContext(CartContext)


    return (
        <TableContainer width={'-webkit-fit-content'}>
            <Table variant='striped' colorScheme='teal'>
                <Thead textDecoration={'underline'} fontStyle={'italic'}>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Cantidad</Th>
                        <Th>Precio</Th>
                        <Th>Total</Th>
                        <Th>Eliminar producto</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td >{cart.nombre}</Td>
                        <Td>{cart.quantity}</Td>
                        <Td> ${cart.precio}</Td>
                        <Td>${cart.precio * cart.quantity}</Td>
                        <Td><button onClick={() => removeItem(cart.id)}>Eliminar</button></Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                </Tfoot>
            </Table>
        </TableContainer>


    )
}

export default CartItem