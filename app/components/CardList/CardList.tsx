import React from 'react'

//chakra ui
import { Box, Card, Grid, Heading, Text } from '@chakra-ui/react'
import CardItem from '../Card/CardItem'

import {buildList} from '../../constants/build'

function CardList() {
    return (
        <Box mt='0px'>
            <Heading as='h2' fontSize="26px">
            Продажа строительных материалов:
            </Heading>
            <Text>
                 
                </Text>
                <Grid 
                mt='30px'
                gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr))'
                gap='40px'
                >
                    {buildList.map((build)=>{

                        return (
                            <CardItem 
                            img={build.image}
                            alt={build.alt}
                            price={build.price}
                            description={build.description}
                            />
                        )
                    })}
                </Grid>

        </Box>
    )
}

export default CardList