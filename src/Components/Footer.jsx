import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box>
        <Box>
            <Image src='https://uploads-ssl.webflow.com/602bea2332bd8ff6426b5af8/602c03275eeaa26140a7f159_Footer%20Logo.svg' />
            <Text><AiOutlineCopyright /> 2020 CorwOwl, All Rights Reserverd.</Text>
        </Box>
        <Box>
            <BsFillArrowLeftCircleFill backgroundColor='#ef4859' />
        </Box>
    </Box>
  )
}

export default Footer