/* theme.ts */

import { extendTheme, useColorModeValue, type ThemeConfig, withDefaultColorScheme, baseTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}



const theme = extendTheme({
  config,
    fonts: {
      heading: 'var(--font-inter)',
      body: 'var(--font-inter)',
    }
})




// const theme = extendTheme({
//   semanticTokens: {
//     colors: {
//       "chakra-body-text": {
//         _light: "purple.800",
//         _dark: "pink.100"
//       },
//       "chakra-body-bg": {
//         _light: "pink.100",
//         _dark: "purple.800"
//       }
//     }
//   }
// });



export default theme


