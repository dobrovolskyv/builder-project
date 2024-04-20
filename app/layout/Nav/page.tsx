'use client'

import NextLink from 'next/link'
import React from 'react'

//imports
import { navLinks } from "../../constants/index"
import { usePathname, useRouter } from 'next/navigation';

//chakra 
import { Box, Divider, Flex, HStack, Link, Spacer, Text, textDecoration } from '@chakra-ui/react'



const Nav = () => {

  const pathname = usePathname();
  return (
    <Box pt="40px"  display={{ base: 'none', md: 'block' }} >
      <Divider bg="#FF7A00"/>
      <Flex minWidth='max-content' alignItems='center' gap='2' pt={{base:"20px", md:"30px"}}>

        {
          navLinks.map((link) => {
            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            return (
              <Link as={NextLink} href={link.route} key={link.label}
                color={`${isActive && '#FF7A00'}`}
                w="auto"
                mr={{base: "20px", lg:"50px"}}
              >
                <Text textTransform="uppercase" >{link.label}</Text>
              </Link>

            )
          })
        }
        <Link as={NextLink} href="#materials" maxW={{base:"250px", lg:"400px"}}>ПРОДАЖА СТРОИТЕЛЬНЫЙ МАТЕРИАЛОВ</Link>
        <Spacer />
      </Flex>
    </Box>
  )
}

export default Nav