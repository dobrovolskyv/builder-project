import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import BlogsItem from '../BlogsItem/page'

import { blogsList } from '@/app/constants/blogs'

function BlogsList() {
  return (
    <Box m="50px 0">
      <Heading as="h1">БЛОГ</Heading>
      <SimpleGrid mt="50px" spacing={10} templateColumns='repeat(auto-fill, minmax(380px, 1fr))'>
        {
          blogsList.map((item, index) => {
            return (
              <BlogsItem
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                link= {item.link}
              />
            )
          })
        }
      </SimpleGrid>
    </Box>
  )
}

export default BlogsList