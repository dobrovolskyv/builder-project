import { Box, Flex, VStack, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

const aboutList = ['О компании', 'Каталог товаров', 'Услуги', 'Для бизнеса', 'Галерея', ' Блог', 'Акции', 'Контакты']
const catalogstList = ['Модульные дома', 'Бани', 'Барбекю', 'Хозблоки', 'Навесы']
const servicesList = ['Доставка и разгрузка', 'Фундамент Дома', 'Услуги', 'Инженерные коммуникации', 'Подборка мебели']

function Footer() {
  return (
    <Box bg="blue.800" color="white" p="20px 40px" mt="auto">
      <Flex maxW='100%' gap='50px' justifyContent='space-between' display={{base: 'none', md:'flex'}}>
        <VStack align='left'>
          {aboutList.map((item) => {
            return (
              <Text>{item}</Text>
            )
          })}
        </VStack>

        <VStack align='left'>
          {catalogstList.map((item) => {
            return (
              <Text>{item}</Text>
            )
          })}
        </VStack>

        <VStack align='left'>
          {servicesList.map((item) => {
            return (
              <Text>{item}</Text>
            )
          })}
        </VStack>
      </Flex>
      <Text m="30px 0" fontWeight='bold' fontSize='12px'>
        © 2024 - ООО Плохвя девочка <br />
        Производим дома после секса с втоей мамкой
      </Text>
      <Text >
      Политика обработки персональных данных
      </Text>
    </Box>
  )
}

export default Footer