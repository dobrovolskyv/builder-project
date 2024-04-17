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
import Form from './components/Form/page';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Advantages from './components/Advantages';


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
                left='-15px'
                top='220px'
                zIndex="1"
                overflow='hidden'>

                <Image src='./images/main2.jpg' alt='main house'
                    backgroundPosition="top center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    w="100vw"


                />
            </Box>
            <Box>

                <Box pt='250px' pl='50px' position="relative" zIndex="2">
                    <Heading as="h1" color="white">
                        Строим лучшие дома
                    </Heading>
                    <Link as={NextLink} href='#tabsBuild' >
                        <Button size='lg' bg='#FF7A00' mt='24px' _hover={{ bg: "#FC4C00" }} >
                            Построить
                        </Button>
                    </Link>

                </Box>
            </Box>
            
            <Advantages/>

            <TabsBuild />

            <CardList />

            <Sponsors />

            <FAQ />

            <Box bg="gray.700" mt="50px" p='20px 40px'>
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
                    {conditionsList.map((condition, index) => {
                        return (
                            <Box maxW='250px' key={index}>
                                <Heading as='h4' fontSize='20px' color='#FF7A00'>{condition.title}</Heading>
                                <Text>{condition.text}</Text>
                            </Box>
                        )
                    })}
                </Flex>

                <Text mt="30px">Ответьте на несколько вопросов и получите расчет предложения по дому и консультацию по ипотеке.</Text>
                <Button bg="#FF7A00" mt="20px" onClick={onOpen} _hover={{ background: '#FC4C00' }}>Получить предложение</Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>
                            <Text fontWeight="bold" fontSize="22px" m="10px 0">Оставить заявку</Text>
                            <Text fontSize="16px" maxW="100%">Заполните форму, и наш менеджер свяжется с вами в ближайшее время</Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Form />
                        </ModalBody>


                        <ModalFooter>
                            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Закрыть
                                </Button>
                                <Button variant='ghost'>Отправить</Button> */}
                            <Text fontSize="10px">Нажимая на кнопку "Отправить", вы даете согласие на обработку своих
                                персональных данных в соответствии с законом № 152-ФЗ "О персональный данных" от 27.07.2006 и политикой обработки персональных данных
                            </Text>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
            <CityMap />
        </Box>
    )
}

export default HomePage
