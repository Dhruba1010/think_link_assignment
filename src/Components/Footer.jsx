import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <Box className='Footer'>
        <Box>
            <Image width='100px' src='https://uploads-ssl.webflow.com/602bea2332bd8ff6426b5af8/602c03275eeaa26140a7f159_Footer%20Logo.svg' />
            <Text display='flex' alignItems='center' fontSize='12px' color='#8C8CA1'><AiOutlineCopyright /> 2020 CorwOwl, All Rights Reserverd.</Text>
        </Box>
        <Box>
            <BsFillArrowLeftCircleFill color='#ef4859' />
        </Box>
    </Box>
  )
}

export default Footer