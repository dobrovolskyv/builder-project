/* theme.ts */

import { extendTheme, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


// 3. extend the theme
const theme = extendTheme({ 
  config,
  styles:{
    fonts: {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
}
  }
 })

export default theme


