import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Text, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

function TabsBuild() {
    return (
        <Box m="100px 0">
            <Text as="h2" fontSize="26px" maxW={450}>МЫ СТРОИМ ЗАГОРОДНЫЕ ДОМА ЛЮБОЙ АРХИТЕКТУРЫ</Text>
            <Tabs mt={10}>
                <TabList >
                    <Tab>Блоки и кирпич</Tab>
                    <Tab>Каркас по канадской технологии
                        (двутавр и стропильные фермы)</Tab>
                    <Tab>Что-то третье</Tab>
                </TabList>
                <TabPanels mt={5}>
                    <TabPanel >
                        <Flex justifyContent="space-between" alignItems="start">
                            <Text maxW="550px">Дома из блоков имеют оптимальное соотношение прочности, теплопроводности, звукоизоляции, технологичности и стоимости. Мы строим из автоклавных газобетонных блоков производства Ytong, Bonolit, AeroStone и керамических блоков Porotherm (Wienerberger), строго соблюдая технологии производителей.</Text>

                            <Image
                                src="./images/house1.jpg"
                                maxW="450px"
                                h="300px"
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="space-between" alignItems="start"> 
                            <Text maxW="550px">Вершиной развития деревянного строительства в коттеджной застройке сегодня является каркас. Технология, по которой построено 85% загородных домов в Западной Европе и США. Дома по данной технологии - экологичные, энергосберегающие, пожаробезопасные, имеют высокую прочность и долговечность.</Text>
                            <Image
                                src="./images/house2.jpg"
                                maxW="450px"
                                h="300px"
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="space-between" alignItems="start">
                            <Text maxW="550px">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Агентство ведущими курсивных имеет назад, имени наш! Семантика, свое злых?</Text>
                            <Image
                                src="./images/house1.jpg"
                                maxW="450px"
                                h="300px"
                            />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default TabsBuild