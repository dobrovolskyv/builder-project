
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React, { useRef, useEffect, useState } from 'react';

import emailjs from '@emailjs/browser';

function Form() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    // const serviceID = 'service_d4v8mkc'
    // const templateId = 'template_mcaoytx'
    // const publicKey = 'DzslUzGVuOTGqHRQI'

    // const templateParams = {
    //     user_name: name,
    //     user_phone: email,
    //     message: message,
    //     to_name: "Dmitry"
    // }

    // emailjs.send(serviceID, templateId, templateParams, publicKey)
    //     .then((response)=>{
    //         console.log("email send successfully", response)
    //         setName('')
    //         setEmail('')

    //     })
    //     .catch((err)=> console.log('error', err))


    return (
        <FormControl onSubmit={handleSubmit} >
            <Stack spacing={3}>
                <Input variant='outline' placeholder='Введите имя' w="100%" type='text' name="user_name" />
                {/* <Input type='email' value={input} onChange={handleInputChange} />
                    {!isError ? (
                        <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )} */}
                <InputGroup w="100%">
                    {/* <InputLeftAddon>
                            +7
                        </InputLeftAddon> */}
                    <Input type='tel' placeholder='Введите телефон' name="user_phone" />
                </InputGroup>
                <Button
                    m="20px 0 0"
                    bg="#FF7A00"
                    type='submit'
                    value="Send"
                    
                >
                   Отправить!

                </Button>
            </Stack>
        </FormControl>
    )

}

export default Form;
