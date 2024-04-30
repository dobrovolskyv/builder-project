import { perfomansList } from '@/app/constants'
import { Flex, Grid, Text, Image } from '@chakra-ui/react'
import React from 'react'

function Advantages() {
  return (
    <Grid
                mt={{ base: '180px',sm:"360px", md: "180px",xl: '280px' }}
                h="200px"
    
                gridTemplateColumns='repeat( auto-fit, minmax(300px, 1fr))'
                gap="20px 60px"
                w='100%'
            >
                {
                    perfomansList.map((item, index)=>{

                        return (

                            <Flex w='100%' gap={4} justify='center' key={index}>
                            <Image className="advantages__img"  src={item.icon} w='50px' h="50px"/>
                            <Text maxW="300px">{item.text}</Text>
                        </Flex>
                        )
                    })
                }

            </Grid>
  )
}

export default Advantages