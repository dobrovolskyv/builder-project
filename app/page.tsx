
'use client'

import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";

export default function Page() {

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <main>
    {/* <Header/> */}

    <Text>test</Text>
 
       <Link href="/about" color='blue.600' _hover={{ color: 'blue.500' }}>
      <Box bg="red">
        text
      </Box>
      About
    </Link>
    
    </main>
 
    // <main className={styles.main}>

    //   <div className={styles.grid}>
    //     <a
    //       href="./pages/user"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //   </div>
    // </main>
  );
}
