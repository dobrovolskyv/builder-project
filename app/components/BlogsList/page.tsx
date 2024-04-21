import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import BlogsItem from '../BlogsItem/page'

import { blogsList } from '@/app/constants/blogs'

function BlogsList() {
  return (
    <Box m={{base:"30px 0", md:"50px 0"}}>
      {/* <SimpleGrid mt="50px" spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {
          blogsList.map((item) => {
            return (
              <BlogsItem
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            )
          })
        }
      </SimpleGrid> */}
       <Heading 
      margin={{base:"100px 0", md:"150px 0"}}
      >
        Страница в разработке, скоро здесь появится информация
      </Heading>
    </Box>
  )
}

export default BlogsList