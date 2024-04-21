'use client'
//import
import NextLink from 'next/link'
import React from 'react'

//chakra ui
import {
    useColorMode,
    Text,
    Button,
    useColorModeValue,
    Box, HStack,
    Image,
    IconButton,
    Flex, Spacer,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Grid,
    GridItem,
} from '@chakra-ui/react'

//icons
import { HiPhone } from "react-icons/hi";

import Form from '../../components/Form/page';
import MenuMobile from '@/app/components/MenuMobile';

const Header = () => {
    // const { colorMode, toggleColorMode } = useColorMode()



    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <HStack sx={{ mt: 4 }} spacing='24px' zIndex="10" position="relative">
            <Flex w='100%' alignItems='center' gap={{base: "5px", md: "20px"}} justifyContent="space-between">
                <Link as={NextLink} href='/'>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/50' boxSize='50px' objectFit='cover' />
                </Link>

                <Spacer display={{ base: 'none', md: 'block' }}/>

                <Text display={{ base: 'none', md: 'block' }}>г. Тула, ул. Мосина 2а/1</Text>

                <Spacer display={{ base: 'none', md: 'block' }}/>

                <Text w={{base:"100%",md:'250px'}} textAlign="center" display={{ base: 'none', md: 'block' }}> Режим работы с пн по пт с 09:00 до 17:00</Text>

                <Spacer display={{ base: 'none', md: 'block' }}/>

                <Text display={{ base: 'none', md: 'block' }}>
                    +7-ХХХ-ХХХ-ХХ-ХХ
                </Text>
                
                <Spacer display={{ base: 'none', md: 'block' }}/>

                <Box w={{ base: '70px', md: 'auto' }} ml="auto">
                    <Flex alignItems="center" justifyContent="center" gap="10px" flexDirection="column">

                        <Button leftIcon={<HiPhone />} display={{ base: 'block', md: 'block' }}
                            w="200px"
                            bg="#FF7A00" _hover={{ bg: "#FC4C00" }} onClick={onOpen}>Обратный звонок</Button>
                    </Flex>
          
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent background='gray.700'>
                            <ModalHeader>
                                <Text fontWeight="bold" fontSize="22px" m="10px 0">Оставить заявку</Text>
                                <Text fontSize="16px" maxW="100%">Заполните форму, и наш менеджер свяжется с вами в ближайшее время</Text>
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Form />
                            </ModalBody>
                            <ModalFooter>
                                
                                <Text fontSize="10px">Нажимая на кнопку "Отправить", вы даете согласие на обработку своих
                                    персональных данных в соответствии с законом № 152-ФЗ "О персональный данных" от 27.07.2006 и политикой обработки персональных данных
                                </Text>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
                <MenuMobile />
            </Flex>
         </HStack>


    )
}

export default Header