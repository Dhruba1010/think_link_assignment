import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './Sidebar.css';
import { MdDesktopMac, MdInventory, MdPeopleOutline } from 'react-icons/md';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const sidebar_list = [
      {
        logo: <MdDesktopMac color='#811434' size='20px' />,
        title: 'Dashboard'
      },
      {
        logo: <MdInventory size='20px' />,
        title: 'Inventory'
      },
      {
        logo: <RiShoppingBag3Line size='20px' />,
        title: 'Orders'
      },
      {
        logo: <MdPeopleOutline size='20px' />,
        title: 'Customers'
      },
      {
        logo: <HiOutlineDocumentReport size='20px' />,
        title: 'Reports'
      },
      {
        logo: <FiSettings size='20px' />,
        title: 'Settings'
      },
    ];

  return (
    <Box className='Sidebar'>
      {sidebar_list.map(el => (
        <Box className='Sidebar__single'>
          {el.logo}
          <Heading as='h5' size='sm'>{el.title}</Heading>
        </Box>
      ))}
    </Box>
  )
}

export default Sidebar