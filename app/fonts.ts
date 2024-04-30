import { Montserrat, Inter, Roboto_Mono } from "next/font/google"

const rubik = Montserrat({
    subsets: ['cyrillic'],
    variable: '--font-rubik',
  })

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })
   
const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto_moto',
  })

    
  export const fonts = {
    rubik,
    inter,
    roboto_mono
  }
