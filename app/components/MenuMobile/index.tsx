import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { navLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'
import ContactsPage from '@/app/(pages)/contacts/page'

function MenuMobile() {

    const pathname = usePathname();
    return (
        <Box display={{ base: 'block', md: 'none' }} ml="auto" >
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    color="white"

                />
                <MenuList w="330px" bg="gray.700">
                    {
                        navLinks.map((link) => {
                            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                            return (
                                <MenuItem key={link.label} bg="gray.700">
                                    <Link as={NextLink} href={link.route} >
                                        <Text textTransform="uppercase" fontSize="22px">{link.label}</Text>
                                    </Link>
                                </MenuItem>
                            )
                        })
                    }
                    <MenuItem bg="gray.700">
                        <Link as={NextLink} href={'/contacts'} >
                            <Text textTransform="uppercase" fontSize="22px">Контакты</Text>
                        </Link>
                    </MenuItem>

                </MenuList>
            </Menu>
        </Box>
    )
}

export default MenuMobile


