"use client"
import React from 'react'

import { Box, Heading, Text, Image, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

function FrameHousePage() {
  return (
    <Box m="50px 0">
      <Heading as="h2">Каркасные дома для круглогодичного проживания</Heading>
      <Flex  gap="50px" alignItems="start" justifyContent="space-between" flexDirection={{base: "column", md: "row"}} mt="50px" w="100%">
      <Image
        src="../images/house3.jpeg"
        maxW="650px"
        w="100%"
      />
      <Box>
      <List spacing={3} >
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Свайно-винтовой фундамент или свайный
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Основной каркас здания
          (пол, стены, потолок, крыша)
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Кровля с покрытием
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Утепление стен стен 200 мм
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Ветрозащитные и пароизоляционные пленки
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Обшивка внутренних стен изнутри ГВЛ 2 слоя
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Cнаружи имитацией бруса или сайдингом
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Устройство декоративных элементов и зимний стеклопакет
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Металлическая входная дверь
        </ListItem>
      </List>
      <Text mt="20px">39 000 руб/м2</Text>
      </Box>
      </Flex>
    </Box>
  )
}

export default FrameHousePage