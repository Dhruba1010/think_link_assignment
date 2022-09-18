import { Box } from '@chakra-ui/react';
import React from 'react';
import './Home.css';
import Main from '../Components/Main';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';


const Home = () => {
  return (
    <Box className='home'>
        <Navbar />
        <Box className='home__main'>
            <Sidebar />
            <Main />
        </Box>
    </Box>
  )
}

export default Home