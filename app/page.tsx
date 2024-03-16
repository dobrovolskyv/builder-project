'use client'
import React from 'react'
import NextLink from 'next/link'
//chakra ui
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, useColorMode } from '@chakra-ui/react'

//components
import { TfiHummer } from "react-icons/tfi";
import CardList from './components/CardList/CardList';
import CityMap from './components/CityMap/CityMap';
import TabsBuild from './components/TabsBuild/page';


const conditionsList = [
    {
        title: "8 из 10",
        text: 'Клиентов приобретают наши дома в ипотеку'
    },
    {
        title: '3%',
        text: 'Минимальная ставка по ипотеке'
    },
    {
        title: '1 день',
        text: 'Срок первичного одобрения ипотеки'
    },
    {
        title: 'БЕСПЛАТНО',
        text: 'Сопровождаем и консультируем по ипотечной сделке'
    },
]

function HomePage() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box >
            <Box position='absolute'
                w='100vw'
                h="550px"
                left='0'
                top='150px'
                zIndex="1"
                overflow='hidden'>

                <Image src='./images/main2.jpg' alt='Dan Abramov'
                    backgroundPosition="top center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    w="100vw"
                    

                />
            </Box>
            <Box>
      
                <Box pt='200px' pl='50px' position="relative" zIndex="2">
                    <Heading as="h1" color="white">
                        Строим лучшие дома
                    </Heading>
                    <Link as={NextLink} href='./catalogs' >
                        <Button size='lg' bg='#FF7A00' mt='24px' _hover={{ bg: "#FC4C00" }} >
                            Перейти в каталог
                        </Button>
                    </Link>

                </Box>
            </Box>
            <Grid
                mt={{base: '150px', xl: '280px'}}
                h='200px'
                templateColumns='repeat(3,1fr)'
                templateRows='repeat(2,1fr)'
                gap={4}
                w='100%'
            >
                {/* {
                    perfomansList.map((item)=>{

                        return (
                            <Flex w='100%' gap={4} justify='center'>
                            {item.icon}
                            <Text>{item.text}</Text>
                        </Flex>
                        )
                    })
                } */}
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text>Уникальный текст</Text>
                </Flex>
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text>Уникальный текст</Text>
                </Flex>
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text>Уникальный текст</Text>
                </Flex>
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text>Уникальный текст</Text>
                </Flex>
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text>Уникальный текст</Text>
                </Flex>
                <Flex w='100%' gap={4} justify='center'>
                    <TfiHummer />
                    <Text variant="primary">Уникальный текст</Text>
                </Flex>
            </Grid>
            
            <TabsBuild/>

            <CardList />

            <Box bg="gray.300" color="black" mt="50px" p='20px 40px'>
                <Flex wrap='wrap'>
                    <Box maxW='450px'>
                        <Heading as='h3' fontSize='26px' >
                            ДОСТУПНЫЕ УСЛОВИЯ НА ПОКУПКУ
                            МОДУЛЬНОГО ДОМА!
                        </Heading>
                        <Text mt="20px">
                            Мы предусмотрели возможность покупки в кредит или ипотеку.
                            Заполните заявку и получите первичную консультацию.
                        </Text>
                    </Box>
                    <Spacer />
                    <Flex justifyContent='center' align='center' gap="20px">
                        <Image src="./images/sber.png" alt="sber" />
                        <Image src="./images/pochta.png" alt="sber" />
                    </Flex>
                </Flex>
                <Flex maxW='100%' gap="20px" wrap={{ base: 'wrap', md: 'nowrap' }} mt='30px'>
                    {conditionsList.map((condition) => {
                        return (
                            <Box maxW='250px'>
                                <Heading as='h4' fontSize='20px' color='green.500'>{condition.title}</Heading>
                                <Text>{condition.text}</Text>
                            </Box>
                        )
                    })}
                </Flex>

                <Text mt="30px">Ответьте на несколько вопросов и получите расчет предложения по дому и консультацию по ипотеке.</Text>
                <Button colorScheme='green' mt="20px" onClick={onOpen}>Получить предложение</Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Перезвоним вам</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Сюда можем добавить форму, в которой будут заполнять клиенты, чтобы перезвонили им</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Закрыть
                            </Button>
                            <Button variant='ghost'>Отправить</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
            <CityMap />
        </Box>
    )
}

export default HomePage
