import React from 'react'

//chakra ui
import { CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box, Card, Link, Flex } from '@chakra-ui/react'


type BuildProps = {
    img?: string,
    alt?: string,
    description?: string,
    price?: string
}

function CardItem({ img, alt, price, description }: BuildProps) {

    return (
        <Card maxW={{base:"350px", md:"350px"}} background='gray.700'>
            <CardBody>
                <Image
                    src={img}
                    alt={alt}
                    borderRadius='lg'
                    w="100%"
                    h={{base:"100px", md:"200px"}}
                />
                <Stack mt='10px' spacing='3'>
                    <Flex flexDir="column" justifyContent="space-between" alignItems="start"  minH={{base:"60px", md:"120px"}} gap="10px">
                    <Heading size={{base:"sm", md:'md'}} color="white" >{description}</Heading>
                    <Text color='blue.200' fontSize={{base: "16px", md:'2xl'}} pl="0px">
                    {price}
                    </Text>
                    </Flex>
                    
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter w="100%" >
                    <Link href='tel:' pl={{base: "10px", md: "0"}}>
                        <Button display="block" variant='solid' bg="#FF7A00" _hover={{ bg: "#FC4C00" }} w="100%" >
                            Позвонить
                        </Button>
                    </Link>

            </CardFooter>
        </Card>
    )
}

export default CardItem