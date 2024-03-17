import { Box, Center, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BuildIncludedList } from "../../constants/index.js"


function BuildIncluded() {
    return (
        <Box mb="50px">
            <Heading as="h2" textAlign="center" mb="50px">В стоимость строительства входит:</Heading>
            <Center>
            <Grid gridTemplateColumns="repeat(auto-fit, minmax(350px,1fr))" gap="20px 20px" maxW="800px" justifyItems="center">
                {BuildIncludedList.map((item) => {
                    return (
                        <Box p="30px 15px" maxW="350px" bg="gray.700" key={item.count}>
                            <Heading as="h3" fontSize="40px">{item.count}</Heading>
                            <Text mt="30px" fontWeight="bold">{item.subtitle}</Text>
                            <Text mt="20px">{item.description}</Text>
                        </Box>
                    )
                })}
            </Grid>
            </Center>
        </Box>
    )
}

export default BuildIncluded