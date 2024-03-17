import React from 'react'

//chakra ui
import { Box, Card, Grid, Heading, Text } from '@chakra-ui/react'
import CardItem from '../Card/CardItem'

import {buildList} from '../../constants/build'

function CardList() {
    return (
        <Box mt='0px'>
            <Heading as='h2' fontSize="26px">
                НАШИ ПРОЕКТЫ МОДУЛЬНЫХ ДОМОВ
            </Heading>
            <Text>
                    Модельный ряд Dominov включает в себя дома разных площадей – от небольших студий до крупногабаритных пространств, изготовленных на металлическом или деревянном каркасе – по желанию заказчика. Дома оснащены электрической системой отопления, регулируемой с помощью системы “Умный дом”, а также камином. <br />
                    Такие дома идеально подходят для круглогодичного проживания.
                </Text>
                <Grid 
                mt='30px'
                gridTemplateColumns='repeat( auto-fit, minmax(330px, 1fr))'
                gap='40px'
                >
                    {buildList.map((build)=>{

                        return (
                            <CardItem 
                            img={build.image}
                            alt={build.alt}
                            price={build.price}
                            square={build.square}
                            />
                        )
                    })}
                </Grid>

        </Box>
    )
}

export default CardList