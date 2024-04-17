import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Text, Flex, Image, Spacer, Link, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

function TabsBuild() {
    return (
        <Box m={{base: "320px 0 50px", sm:"300px 0",md: "100px 0"}} id="tabsBuild">
            <Heading as="h2" fontSize="26px" maxW="100%" textTransform="uppercase">Проектирование и строительство домов  любой сложности</Heading>
            <Tabs mt={10} minH="400px">
                <TabList display="flex" flexDir={{base: "column", md: "row"}}>
                    <Tab>Каркасные дома для летнего проживания</Tab>
                    <Tab>Каркасные дома для круглогодичного проживания</Tab>
                    <Tab>Дома из кирпича и газобетона</Tab>
                </TabList>
                <TabPanels mt={5}>
                    <TabPanel>
                        <Flex flexDirection={{base: "column-reverse", lg: "row"}}  justifyContent="space-between" alignItems="start" gap="30px">
                            <Box maxW={{base: "100%", lg: "550px"}}>
                                <Text mb="20px">Каркасный дом для летнего проживания – это уютное и функциональное жилище, созданное из прочных и экологически чистых материалов. Он отличается легкостью конструкции, быстротой возведения и современным дизайном, идеально подходящим для комфортного отдыха в теплые месяцы года. Такой дом оборудован всем необходимым для беззаботного проживания: спальнями, кухнями, санузлами, террасами и балконами, где можно наслаждаться теплыми летними вечерами.</Text>
                                <Link as={NextLink} href="/summerhouse" >
                                    <Button variant="outline" border="1px solid #FF7A00"  color="white">
                                        Подробнее
                                    </Button>
                                </Link>
                            </Box>

                            <Image
                                src="./images/houses/tabhouse1.jpeg"
                                maxW="100%"
                                w={{base:"650px", xl:"550px"}}
                                h={{base:"240px", xl:"300px"}}
                            />

                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex flexDirection={{base: "column-reverse", lg: "row"}}  justifyContent="space-between" alignItems="start" gap="30px">
                        <Box maxW="550px">
                                <Text mb="20px">Каркасный дом для круглогодичного проживания — это надежное и эстетичное жилье, построенное из экологически чистых материалов с использованием современных технологий. Он обеспечивает комфортные условия для жизни в любое время года, благодаря эффективной теплоизоляции и энергосберегающим технологиям. Такой дом обычно имеет продуманную планировку, включающую функциональные зоны для отдыха, работы и развлечений</Text>
                                <Link as={NextLink} href="/framehouse" >
                                    <Button variant="outline" border="1px solid #FF7A00" color="white">
                                        Подробнее
                                    </Button>
                                </Link>
                        
                            </Box>
                            <Image
                                src="./images/houses/tabhouse2.jpeg"
                                maxW="100%"
                                w={{base:"650px", xl:"450px"}}
                                h={{base:"240px", xl:"300px"}}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex flexDirection={{base: "column-reverse", lg: "row"}}  justifyContent="space-between" alignItems="start" gap="30px">
                        <Box maxW="550px">
                                <Text mb="20px">Дома из газобетона и кирпича - это надежные и долговечные конструкции, которые обеспечивают высокий уровень комфорта и энергоэффективности. Газобетонные блоки обладают отличными тепло- и звукоизоляционными свойствами, а также высокой прочностью и легкостью. Кирпичные дома, в свою очередь, имеют классический и стильный вид, а также обладают высокой устойчивостью к атмосферным воздействиям и пожаробезопасностью. Оба материала экологически безопасны и не наносят вреда окружающей среде</Text>
                                <Link as={NextLink} href="/stonehouse" >
                                    <Button variant="outline" border="1px solid #FF7A00" color="white">
                                        Подробнее
                                    </Button>
                                </Link>
                            </Box>
                            <Image
                                src="./images/houses/tabhouse3.jpeg"
                                maxW="100%"
                                w={{base:"650px", xl:"450px"}}
                                h={{base:"240px", xl:"300px"}}
                            />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default TabsBuild