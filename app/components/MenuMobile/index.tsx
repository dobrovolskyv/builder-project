import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { navLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'

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

                />
                <MenuList w="330px">
                    {
                        navLinks.map((link) => {
                            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                            return (
                                <MenuItem key={link.label}>
                                    <Link as={NextLink} href={link.route} >
                                        <Text textTransform="uppercase" fontSize="22px">{link.label}</Text>
                                    </Link>
                                </MenuItem>
                            )
                        })
                    }
                    <MenuItem>
                        <Text fontSize="14px">г. Тула, ул. Мосина 2а/1</Text>
                    </MenuItem>
                    <MenuItem>
                        <Text fontSize="14px"> Режим работы с пн по пт с 09:00 до 17:00</Text>
                    </MenuItem>
                    <MenuItem>
                        <Text fontSize="14px">
                            +7-ХХХ-ХХХ-ХХ-ХХ
                        </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default MenuMobile


