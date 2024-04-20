import React from 'react'

//chakra ui
import { Box, Card, Grid, Heading, Text } from '@chakra-ui/react'
import CardItem from '../Card/CardItem'

import {buildList} from '../../constants/build'

function CardList() {
    return (
        <Box mt='0px' id="materials">
            <Heading as='h2' fontSize="26px">
            ПРОДАЖА СТРОИТЕЛЬНЫЙ МАТЕРИАЛОВ
            </Heading>
            <Text>
                 
                </Text>
                <Grid 
                mt='30px'
                gridTemplateColumns={{base: "repeat( auto-fit, minmax(150px, 1fr))",sm: "repeat( auto-fit, minmax(200px, 1fr))", md: "repeat( auto-fit, minmax(250px, 1fr))"}}
                gap='20px'
                >
                    {buildList.map((build)=>{

                        return (
                            <CardItem 
                            img={build.image}
                            alt={build.alt}
                            price={build.price}
                            description={build.description}
                            key={build.alt}
                            />
                        )
                    })}
                </Grid>

        </Box>
    )
}

export default CardList