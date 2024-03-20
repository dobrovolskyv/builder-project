import { Box, Button, FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Form() {

    // const [input, setInput] = useState('')

    // const handleInputChange = (e: any) => setInput(e.target.value)

    // const isError = input === ''

    return (
        <Box>
            
            <FormControl>
                <Stack spacing={3}>
                    <Input variant='outline' placeholder='Введите имя' w="100%" />
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
                        <Input type='tel' placeholder='Введите телефон' />
                    </InputGroup>
                    <Button
                        m="20px 0 0"
                        bg="#FF7A00"
                        type='submit'
                    >
                        Отправить
                    </Button>
                </Stack>
            </FormControl>
        </Box>
    )
}

export default Form

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.')
}
