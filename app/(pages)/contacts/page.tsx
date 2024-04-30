import CityMap from '@/app/components/CityMap/CityMap'
import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

function ContactsPage() {
    return (
        <Box m="50px 0 100px">
            <Text fontSize="18px">г. Тула, ул. Мосина 2а/1</Text>
            <Text fontSize="18px" mt="10px"> Режим работы с пн по пт с 09:00 до 17:00</Text>
            <Text fontSize="22px" mt="10px">
                <Link href="tel:+7-999-999-99-99">
                    +7-ХХХ-ХХХ-ХХ-ХХ
                </Link>
                
            </Text>
        </Box>
    )
}

export default ContactsPage