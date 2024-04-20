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
    './sponsors/b.svg',
    './sponsors/baksteen.png',
    './sponsors/bk.png',
    './sponsors/bkz.png',
    './sponsors/cedral.webp',
    './sponsors/decover.png',
    './sponsors/docke.png',
    './sponsors/dz.png',
    './sponsors/fakro.png',
    './sponsors/grandline.png',
    './sponsors/ironkir.png',
    './sponsors/isobox.png',
    './sponsors/metallprofit.png',
    './sponsors/nzkm.png',
    './sponsors/recke.png',
    './sponsors/shinglas.png',
    './sponsors/terex.png',
    './sponsors/volgabrick.png',
  ]
function Sponsors() {
  return (
    <Box overflow="hidden" width="100%" whiteSpace="nowrap" className='container' m="100px 0">
      <Flex gap={{base: "30px", md: "50px"}} alignItems="center" justifyContent="space-between" className="runningString" h="50px">
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