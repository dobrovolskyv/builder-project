import BuildIncluded from '@/app/components/BuildIncluded/page'
import HousesList from '@/app/components/HousesList/page'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Catalogs = () => {
  return (
    <Box mt="40px">
      <Heading as="h1">Каталог</Heading>
      <HousesList/>
      <BuildIncluded/>
    </Box>
  )
}

export default Catalogs