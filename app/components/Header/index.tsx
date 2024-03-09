'use client'
import { useColorMode, Text, Button, useColorModeValue, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')

    return (
        <header>

        </header>
    )
}

export default Header