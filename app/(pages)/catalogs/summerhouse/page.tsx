"use client"
import React from 'react'

import { Box, Heading, Text, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

function SpringHousePage() {
  return (
    <Box m="50px 0">
      <Heading as="h2">Каркасные дома для летнего проживания</Heading>
      <Image
        src="../images/house4.jpeg"
        maxW="650px"
        mt="20px"
      />
      <List spacing={3} mt="50px">
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
          Утепление стен стен 150 мм
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Ветрозащитные и пароизоляционные пленки
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Обшивка внутренних стен изнутри ГВЛ
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
      <Text mt="20px">От … руб</Text>
    </Box>
  )
}

export default SpringHousePage