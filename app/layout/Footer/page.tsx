"use client"
import { navLinks } from '@/app/constants';
import { Box, Flex, VStack, Text, Spacer, Center, Link } from '@chakra-ui/react'
import React from 'react'

const aboutList = ['Галерея', ' Блог', 'Акции', 'О компании', 'Продажа строительных материалов']

import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link'

function Footer() {

  const pathname = usePathname();
  return (

    <Box bg="gray.700" color="white" p="20px 40px" maxW="1400px" textAlign="center" minH="200px">
 
 
        <Flex minWidth='max-content' flexDir={{base: "column", md: "row"}} justifyContent="center" alignItems='center' gap='2' pt={{ base: "20px", md: "30px" }}>
        <Spacer/>
          {
            navLinks.map((link) => {
              const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
              return (
                <Link as={NextLink} href={link.route} key={link.label}
                  color={`${isActive && '#FF7A00'}`}
                  w="auto"
                  mr={{ base: "20px", lg: "50px" }}
                >
                  <Text textTransform="uppercase" >{link.label}</Text>
                </Link>

              )
            })
          }
          <Link as={NextLink} href="#materials" maxW={{ base: "250px", lg: "400px" }}>ПРОДАЖА СТРОИТЕЛЬНЫЙ МАТЕРИАЛОВ</Link>
          <Spacer />
        </Flex>
 
      <Text m="20px 0" fontWeight='bold' fontSize='16px'>
        Компания "Art-house"<br />
        Производим лучшие и качественные дома
      </Text>
      <Text m="10px 0" fontWeight='semibold' fontSize='12px'>
        © 2024 dob dev. Все права защищены.  <br />
      </Text>
    </Box>

  )
}

export default Footer