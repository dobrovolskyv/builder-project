import { housesList } from '@/app/constants/build'
import { Box, Grid, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

function HousesList() {
  return (

      <Grid 
      gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      gap="20px"
      m="50px 0"
      alignItems="start"
      justifyContent="center"
      >
        {housesList.map((house) => {
          return (
            <Link as={NextLink} key={house.id} href={house.link} maxW="350px">

              <Heading as="h3" fontSize="18px">{house.title}</Heading>
              <Image src={house.img} 
              w="100%"
              h="250px"
              mt="20px"
              />
            </Link>
          )
        })}
      </Grid>

  )
}

export default HousesList