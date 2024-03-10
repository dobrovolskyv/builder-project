import React from 'react'

//chakra ui
import {  CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box, Card } from '@chakra-ui/react'




function CardItem({img,alt,price,square}) {

    return (
        <Card maxW="350px">
            <CardBody>
                <Image
                    src={img}
                    alt={alt}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Студия М</Heading>
                    <Text>
                        Общая площать {square}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        от {price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='green'>
                        Заказать
                    </Button>
                    <Button variant='ghost' colorScheme='green'>
                        Добравить в избраное 
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem