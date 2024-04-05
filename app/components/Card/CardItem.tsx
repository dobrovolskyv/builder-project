import React from 'react'

//chakra ui
import { CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box, Card, Link } from '@chakra-ui/react'


type BuildProps = {
    img?: string,
    alt?: string,
    description?: string,
    price?: string
}

function CardItem({ img, alt, price, description }: BuildProps) {

    return (
        <Card maxW="350px">
            <CardBody>
                <Image
                    src={img}
                    alt={alt}
                    borderRadius='lg'
                    w="100%"
                    h="200px"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{description}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                       {price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter w="100%">
                <ButtonGroup spacing='2'>
                    <Link href='tel:'>
                        <Button variant='solid' bg="#FF7A00" _hover={{ bg: "#FC4C00" }} w="100%">
                            Позвонить
                        </Button>
                    </Link>
               
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem