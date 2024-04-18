import { perfomansList } from '@/app/constants'
import { Flex, Grid, Text, Image } from '@chakra-ui/react'
import React from 'react'

function Advantages() {
  return (
    <Grid
                mt={{ base: '170px',md:"150px", lg: "200px",xl: '300px' }}
                h="200px"
                // templateColumns='repeat(3,1fr)'
                // templateRows='repeat(2,1fr)'
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