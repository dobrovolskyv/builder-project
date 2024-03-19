import React from 'react'

//chakra ui
import {  CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box, Card } from '@chakra-ui/react'


type BuildProps = {
    img?: string,
    alt?: string,
    square?: string,
    price?: string
}

function CardItem({img,alt,price,square}:BuildProps) {

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
                    <Button variant='solid' bg="#FF7A00" _hover={{bg: "#FC4C00"}}>
                        Заказать
                    </Button>
                    <Button variant='ghost' bg="#FF7A00ad" fontSize="12px" _hover={{bg: "#FC4C00"}}>
                        Добравить в избраное 
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem