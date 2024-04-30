"use client"

import { Box, Button, FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftAddon, Stack, Text, Spinner } from '@chakra-ui/react'

import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';

function Form() {
    const TOKENN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    // const CHAT_ID = '-1002059166394';
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    
    const URI_API = `https://api.telegram.org/bot${TOKENN}/sendMessage`;

    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: any) => {

        e.preventDefault();
        setLoading(true);
        const message = `*Заявка с сайта!*\n\n*Отправитель:* ${e.target.name.value}\n*Перезвони братишке по этому телефону:* ${e.target.phone.value}`;

        await axios.post(URI_API, {

            chat_id: CHAT_ID,
            parse_mode: 'Markdown',
            text: message,

        })
            .then(() => {
                e.target.name.value = '';
                e.target.phone.value = '';

            })
            .catch((err) => {
                console.warn('ошибка',err);
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 1000);

            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <Input variant='outline' placeholder='Введите имя' w="100%" type='text' name="name" required/>
           
                <InputGroup w="100%">
                    {/* <InputLeftAddon>
                            7
                        </InputLeftAddon> */}
                    <Input type='tel' placeholder='Введите телефон' name="phone" required/>
                </InputGroup>
                <Button
                    m="20px 0 0"
                    bg="#FF7A00"
                    type='submit'
                    isLoading={loading}
                    loadingText="Отправка"
                    color="white"
                >
                    Отправить!

                    {loading && <Spinner ml={2} size="sm" color="white" />}

                </Button>
            </Stack>
        </form>
    )

}

export default Form;

