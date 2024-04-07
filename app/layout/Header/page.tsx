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
} from '@chakra-ui/react'

//icons
import { HiPhone } from "react-icons/hi";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Form from '../../components/Form/page';

const Header = () => {
    // const { colorMode, toggleColorMode } = useColorMode()



    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <HStack sx={{ mt: 4 }} spacing='24px' >
            <Flex w='100%' alignItems='center' gap='1px' justifyContent="center">
                <Box>
                    <Link as={NextLink} href='/'>
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/50' boxSize='50px' objectFit='cover' />
                    </Link>
                </Box>
                <Spacer />
                <Text>г. Тула, ул. Победы, д. 24</Text>
                <Spacer />
                <Text w='150px'> Режим работы Ежедневно с 10:00 до 20:00</Text>
                <Spacer />
                <Text>
                    +7-ХХХ-ХХХ-ХХ-ХХ
                </Text>
                <Spacer />
                <Box w={{ base: '70px', md: 'auto' }}>
                    <Flex alignItems="center" justifyContent="center" gap="10px" flexDirection="column">
                        <Button leftIcon={<FaTelegram />}
                            w="200px"
                            display={{ base: 'none', md: 'block' }}
                            colorScheme='blue'>Чат-бот</Button>
                        <Button leftIcon={<HiPhone />} display={{ base: 'none', md: 'block' }}
                            w="200px"
                            bg="#FF7A00" _hover={{ bg: "#FC4C00" }} onClick={onOpen}>Обратный звонок</Button>
                    </Flex>
                    <IconButton
                        visibility={{ base: 'visible', md: 'hidden' }}
                        onClick={onOpen}
                        bg='#FF7A00'
                        aria-label='Call Segun'
                        size='sm'
                        icon={<HiPhone />}

                    />
                    <IconButton
                        visibility={{ base: 'visible', md: 'hidden' }}
                        onClick={onOpen}
                        bg='blue.600'
                        aria-label='Call Segun'
                        size='sm'
                        icon={<FaTelegram />}

                    />
                    <Modal isOpen={isOpen} onClose={onClose} >
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
                {/* <Button  onClick={toggleColorMode}>
                    {colorMode === 'light' ? <IoMoonSharp /> : <MdSunny />}

                </Button> */}
            </Flex>
        </HStack>

    )
}

export default Header