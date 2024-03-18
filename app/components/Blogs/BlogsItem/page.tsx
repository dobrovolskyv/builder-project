import { Box, Card, CardBody, CardHeader, Heading, Text, Button, CardFooter, Image } from '@chakra-ui/react'
import React from 'react'

type BlogsListProps = {
    img: string,
    title: string,
    description: string
}

function BlogsItem({img,title,description}:BlogsListProps) {
    return (
                <Card>
                    <CardHeader>
                        <Image src={img} w="100%" />
                    </CardHeader>
                    <CardBody>
                        <Heading as='h3' fontSize="24px">{title}</Heading>
                        <Text>{description}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button bg="#FF7A00" _hover={{ background: "#FC4C00" }}>Подробнее</Button>
                    </CardFooter>
                </Card>

    )
}

export default BlogsItem