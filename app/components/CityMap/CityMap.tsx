import { Box } from '@chakra-ui/react'
import React from 'react'

function CityMap() {
  return (
    <Box> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.740793260993!2d37.60079561274631!3d54.202373510215295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41344087de7a00af%3A0x4365930dfaa319ee!2z0YPQuy4g0JzQvtGB0LjQvdCwLCAy0LAsINCi0YPQu9CwLCDQotGD0LvRjNGB0LrQsNGPINC-0LHQuy4sIDMwMDA0MQ!5e0!3m2!1sru!2sru!4v1713626519152!5m2!1sru!2sru" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

export default CityMap