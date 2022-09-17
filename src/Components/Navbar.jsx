import { Avatar, Box, Heading, Image, Input } from '@chakra-ui/react'
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Box backgroundColor='#811434' display='flex' >
      <Image src='https://uploads-ssl.webflow.com/602bea2332bd8ff6426b5af8/602c03275eeaa26140a7f159_Footer%20Logo.svg' />
      <Box>
        <AiOutlineSearch color='#535f7b' />
        <Input placeholder='Search wines, customers here...' />
      </Box>
      <FiBell color='#535f7b' />
      <Heading as='h5' size='sm'>Nicholas D.</Heading>
      <Avatar size='sm' src='https://bit.ly/dan-abramov' />
      <BsChevronDown />
    </Box>
  )
}

export default Navbar