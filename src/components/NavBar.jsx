import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4' bg='blue'>
                    <h1>NBindumentaria</h1>
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    <Menu>
                        <MenuButton>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Category a</MenuItem>
                            <MenuItem>Category b</MenuItem>
                            <MenuItem>Category c</MenuItem>
                            <MenuItem>Category d</MenuItem>
                            <MenuItem>Category e</MenuItem>
                        </MenuList>
                    </Menu>

                </Box>
                <Spacer/>
                <Box>
                    <CartWidget />
                </Box>
            </Flex>

        </div>
    )
}

export default NavBar