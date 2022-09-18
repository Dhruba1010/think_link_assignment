import './Navbar.css'
import { Avatar, Box, Heading, Image, Input } from '@chakra-ui/react'
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Box className='navbar' >
      <Box className='navbar__logo'>
        <Image src='https://uploads-ssl.webflow.com/602bea2332bd8ff6426b5af8/602c03275eeaa26140a7f159_Footer%20Logo.svg' />
      </Box>
      <Box className='navbar__search' >
        <Box className='navbar__searchCont'>
          <AiOutlineSearch color='#535f7b' size='28px' />
          <Input placeholder='Search wines, customers here...' />
        </Box>
      </Box>
      <FiBell className='navbar__bell' color='white' size='28px' />
      <Box className='navbar__profile'>
        <Heading as='h5' size='sm' color='white'>Nicholas D.</Heading>
        <Avatar size='sm' src='https://bit.ly/dan-abramov' />
        <BsChevronDown color='white' size='24px' />
      </Box>
    </Box>
  )
}

export default Navbar