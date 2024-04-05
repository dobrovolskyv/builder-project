import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const images = [
    './sponsors/bonolit.png',
    './sponsors/delta.png',
    './sponsors/isover.png',
    './sponsors/kg.png',
    './sponsors/knauf.svg',
    './sponsors/poritep.png',
    './sponsors/rockwool.png',
    './sponsors/technikol.svg',
    './sponsors/ytong.png',
    './sponsors/bonolit.png',
    './sponsors/delta.png',
    './sponsors/isover.png',
    './sponsors/kg.png',
    './sponsors/knauf.svg',
    './sponsors/poritep.png',
    './sponsors/rockwool.png',
    './sponsors/technikol.svg',
    './sponsors/ytong.png',
    './sponsors/bonolit.png',
    './sponsors/delta.png',
    './sponsors/isover.png',
    './sponsors/kg.png',
    './sponsors/knauf.svg',
    './sponsors/poritep.png',
    './sponsors/rockwool.png',
    './sponsors/technikol.svg',
    './sponsors/ytong.png',
  ]
function Sponsors() {
  return (
    <Box overflow="hidden" width="100%" whiteSpace="nowrap" className='container' m="100px 0">
      <Flex gap="50px" alignItems="center" justifyContent="space-between" className="runningString" h="50px">
        {
            images.map((img)=>{
                return (
 
                        <Image key={img} src={img} maxW="150px" h="50px"/>
                  
                )
            })
        }
  
         
       
      </Flex>
  </Box>
  )
}

export default Sponsors