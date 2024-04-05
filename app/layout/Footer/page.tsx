import { Box, Flex, VStack, Text, Spacer, Center } from '@chakra-ui/react'
import React from 'react'

const aboutList = ['О компании', 'Каталог товаров', 'Услуги', 'Для бизнеса', 'Галерея', ' Блог', 'Акции', 'Контакты']
const catalogstList = ['Модульные дома', 'Бани', 'Барбекю', 'Хозблоки', 'Навесы']
const servicesList = ['Доставка и разгрузка', 'Фундамент Дома', 'Услуги', 'Инженерные коммуникации', 'Подборка мебели']

function Footer() {
  return (
    // <Box position="absolute"
    //   left="-15px"
    //   w="100vw"
    //   bg="gray.700"
    //   mt="50px"
    // >
      <Box bg="gray.700" color="white" p="20px 40px" maxW="1400px">
        <Flex maxW='100%' gap='50px' justifyContent='space-between' display={{ base: 'none', md: 'flex' }}>
          <VStack align='left'>
            {aboutList.map((item, index) => {
              return (
                <Text key={index}>{item}</Text>
              )
            })}
          </VStack>

          <VStack align='left'>
            {catalogstList.map((item, index) => {
              return (
                <Text key={index}>{item}</Text>
              )
            })}
          </VStack>

          <VStack align='left'>
            {servicesList.map((item, index) => {
              return (
                <Text key={index}>{item}</Text>
              )
            })}
          </VStack>
        </Flex>
        <Text m="30px 0" fontWeight='bold' fontSize='12px'>
          © 2024 - ООО Плохая девочка <br />
          Производим дома после секса с твоей мамкой
        </Text>
        <Text >
          Политика обработки персональных членов
        </Text>
      </Box>
    // </Box>
  )
}

export default Footer