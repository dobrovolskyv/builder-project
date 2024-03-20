"use client"
import React from 'react'

import { Box, Heading, Text, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

function StoneHousePage() {
  return (
    <Box m="50px 0">
      <Heading as="h2">Каркасные дома для круглогодичного проживания</Heading>
      <Image
        src="../images/house2.jpeg"
        maxW="650px"
        mt="20px"
      />
      <List spacing={3} mt="50px">
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Свайно-ростверковый фундамент 
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Разводка коммуникаций под фундаментом, ввод канализаций, водопровода и электричества в дом
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Устройство плиты пола по грунту
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Основные стены из газобетона 375-400м 
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Облицовка наружных стен керамическим кирпичом или утепление стен ППС 16Ф 50мм с последующим оштукатуриванием стен в цвет
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Комплексное устройство кровли из металлочерепицы с утеплением перекрытий 200мм
        </ListItem>
  
      </List>
      <Text mt="20px">От … руб</Text>
    </Box>
  )
}

export default StoneHousePage