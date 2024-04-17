import React from 'react'
import NextLink from 'next/link'

import { Box, Card, CardBody, CardHeader, Heading, Text, Button, CardFooter, Image, Link } from '@chakra-ui/react'


// type BlogsListProps = {
//     img: string,
//     title: string,
//     description: string
// }

function BlogsItem({ img, title, description,link }: any) {

    return (

        <Card>
            <CardHeader>
                <Image src={img} w="100%" />
            </CardHeader>
            <CardBody >
                <Heading as='h3' fontSize="24px" minH="110px">{title}</Heading>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter>
                <Link as={NextLink} href={link}>
                    <Button bg="#FF7A00" _hover={{ background: "#FC4C00" }}>Подробнее</Button>
                </Link>
            </CardFooter>
        </Card>

    )
}

export default BlogsItem


