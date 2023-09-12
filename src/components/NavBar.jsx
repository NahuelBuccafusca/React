import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <Flex>
            <Box p='4' bg='blue'>
                <Link to={'/'}>
                    <h1>NBindumentaria</h1>
                </Link>
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/categoria/${'Remeras'}`}>
                                Remeras
                            </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to={`/categoria/${'Pantalones'}`}>
                            Pantalones
                        </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${"Calzado"}`}>
                                Calzado
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Accesorios'}`}>
                                Accesorios
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

            </Box>
            <Spacer />
            <Box>
                <Link to={'/Cart'}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    )
}

export default NavBar