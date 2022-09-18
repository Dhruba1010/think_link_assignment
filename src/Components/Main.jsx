import { Box, Button, Checkbox, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react';
import './Main.css';
import { RiShoppingBasket2Line, RiTruckLine } from 'react-icons/ri';
import { AiOutlineFileDone, AiOutlineDown } from 'react-icons/ai';
import { MdOutlineCancel, MdAddCircleOutline } from 'react-icons/md';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { FiRefreshCw } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import Chart from './Chart';

const Main = () => {
    const details = [
        {
            title: 'Open orders',
            number: 239,
            boxShadow: '0px -2px 0px #FFAA2C, 0px 2px 11px rgba(0, 0, 0, 0.06)',
            logo: <RiShoppingBasket2Line color='#ffaa2c' size='24px' />
        },
        {
            title: 'Orders in transit',
            number: 126,
            boxShadow: '0px -2px 0px #2C67FF, 0px 2px 11px rgba(242, 242, 242, 0.5)',
            logo: <RiTruckLine color='#2c67ff' size='24px' />
        },
        {
            title: 'Fulfiled orders',
            number: 1254,
            boxShadow: '0px -2px 0px #00CF3A, 0px 2px 11px rgba(242, 242, 242, 0.5)',
            logo: <AiOutlineFileDone color='#00cf3a' size='24px' />
        },
        {
            title: 'Cancelled orders',
            number: 35,
            boxShadow: '0px -2px 0px #FF1C1C, 0px 2px 11px rgba(242, 242, 242, 0.5)',
            logo: <MdOutlineCancel color='#ff1c1c' size='24px' />
        }
    ];

    const products = [
        {
            logo: 'https://s3-alpha-sig.figma.com/img/bfd9/6187/8d0d51c6db8a0d3d73a2a9f4f5e317cc?Expires=1664150400&Signature=fq7A1y7-9TeeJ6cd8RYmtOQFNVAAKjmY8WNuhCGxe1C~XGxuIAtUEskvLurpJV~sbliXMohuIbrO4sIZlMpFSfggr63UUx1H4l~zApyClLE7SLCuzHO1QfBGTFmHE0DHlfp3tUgPMEXljSH-9wqio9mB-JB95ncUv4I1wHUHdNZLZSRplNVfTlxWQ2HllEXRTLx-lgN7PmpukRWOR-mu6lHCxWgYNaX~DqMK3z8G-~H2mYsjqMPOexBKWnwB31zEdYGpewO0VIKkAEuBdzIlAhk46Pj55qXkuBENbf~hn-DTCC0O5Lo5Hey7cVuTaL1usWZYj1lD5~1mCXFKdFbEsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'Staglin Family Vineyard...',
            subTitle: 'France - Sauternes',
            rating1: 'RP 95',
            rating2: '+3',
            year: "1950's",
            quantity: '04',
            volume: 'Standard (750 mL)',
            cost: '$56.95',
            price: '$59.95'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/5544/007a/ec5c4c3a0000173115678dfacd9318f0?Expires=1664150400&Signature=BSFVledc3cSYEpvAhtiCqUx6EcYx4FzkSwzB5qD81-9fmYlX1IwdAP86OwbWISJlT5fBBtFDsgg2wIxgaainzMOVRHtgp~Q51TMJ23sgGTsU~5YGPDs5zrB4r-s6rUOmKhOmGESosPIMbTD148JEOhUlnTP9JkCgVxBF9uANPlkUQK~ct83p7oOCsdvX96FVCI0dRacxy51m6G8TG2hL7KdJYxClIUHLn9qfZ5XfbTWVSun7Pot1421BtXdQuoQZaHp3UiLhGYgButZpwvSHsgFmOwM2GUuAEIvleU2Nw1PfBzbdi5LWVCcr3noxrNeFlF0J3Ll9-uf24iS1HAcCGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'Bibi Graetz Testamatta Tos...',
            subTitle: 'Chianti - Blends and Other',
            rating1: 'RP 95',
            rating2: '+3',
            year: "2015",
            quantity: '32',
            volume: 'Magnum (1500 mL)',
            cost: '$71.95',
            price: '$72.95'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/3c4d/41ba/cdf5afd1eae396c7bf7865594f4bcb92?Expires=1664150400&Signature=Vga0qSJD1582XJmupyDqMXodNHJaaVl~VeZN1CYxf-3dYtDQEp8DdDSWZizd5xOgTN~JR5VXGu4FW0LIsK8G-E-RcTGTdw8kzZQ8I3dEy~4Pez294yLBb5z99D1Bb6kQ1hdAwZ8Srap0xcy1QwqCLGq3j2Umim0cwblHMc6roiG6RSqtMeuc1vUXWMGfeHjeHtpg4if8xycwECUZTFTRy8dLwXVqk7xh8Vzl4W0XXP6vAYRT90c5SF5foDo3OSosMlim4M90RKrVlNxcEcI39lDrwEkkPiOO~cLKCdSYX9muWyfXebm7Ap48eqcoTOzskzyHUjymjfW~GA8E7-TlRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'Cayuse Syrah en Chamber...',
            subTitle: 'Syrah',
            rating1: 'RP 95',
            rating2: '+3',
            year: "2012",
            quantity: '12',
            volume: 'Standard (750 mL)',
            cost: '$139.95',
            price: '$150.00'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/bfd9/6187/8d0d51c6db8a0d3d73a2a9f4f5e317cc?Expires=1664150400&Signature=fq7A1y7-9TeeJ6cd8RYmtOQFNVAAKjmY8WNuhCGxe1C~XGxuIAtUEskvLurpJV~sbliXMohuIbrO4sIZlMpFSfggr63UUx1H4l~zApyClLE7SLCuzHO1QfBGTFmHE0DHlfp3tUgPMEXljSH-9wqio9mB-JB95ncUv4I1wHUHdNZLZSRplNVfTlxWQ2HllEXRTLx-lgN7PmpukRWOR-mu6lHCxWgYNaX~DqMK3z8G-~H2mYsjqMPOexBKWnwB31zEdYGpewO0VIKkAEuBdzIlAhk46Pj55qXkuBENbf~hn-DTCC0O5Lo5Hey7cVuTaL1usWZYj1lD5~1mCXFKdFbEsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'Staglin Family Vineyard...',
            subTitle: 'United States - California - Blends',
            rating1: 'RP 95',
            rating2: '+3',
            year: "2010",
            quantity: '04',
            volume: 'Odd Ball (5000 mL)',
            cost: '$56.95',
            price: '$59.95'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/cf97/0ee1/678e56bf43423793165b22a2cb3d3a32?Expires=1664150400&Signature=eRH1Ss3XIPp8T7cwt04Z80TCR5ZtCqKqKxPE-ID3GNh-jrnNyG38qljqfJ2JS7DtEnf3cdLLJSX2d5U-ZU5L1yYRLoL3m6kedMEzGFopzZ15g03jYd52A9Eg2t2qxRXk8psmXlBgM9Gb1YD-gTqPRMm5D-TD3112gM7Rfkuj1fWdX9AsERz94oWZ2xdZd2R0mg0riYgqLjTahSYpsoofqXzOcpojHpWZqHMmwlpmgYoy7vg2R4JcVf8uq5kA20Nb~D~YUIYLPGGPzvyp9ga0~RpZpFe~ANIPVPqTvb~Ih2mUVWY9LiuRtCxv4KO7Uc6-QNHFNiHBCHuNtiZY3BEdhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'K Vintners Syrah Cattle king',
            subTitle: 'France - Sauternes',
            rating1: 'RP 95',
            rating2: '+3',
            year: "2015",
            quantity: '25',
            volume: 'Magnum (1500 mL)',
            cost: '$79.95',
            price: '$92.95'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/470c/6550/f2e3acdb8d6f97077d6c895d3e466552?Expires=1664150400&Signature=ePFVN-e7HMiM2f53yo6rpnUCRIssm2vzhGBhXqjCOv3J1cDzikuylIjR1TyPl2ALZg40VVA7wu9uQJoyawS~tty07TChEX0EMCcXhUhIok2hUWwIq2NK4jY3stPQ96mSOw9v5u2i5wY20yuvdBG-PbFG9pxoD6FFCH~H0AhkJ8jH47nTcRq3GdRfdiEJe75USNa9HSxVETtmJblhS3wY-TgzfJUguMOlxmN9791DzamWJ0lUf3fumWCJAsFYNXal-VpD-axSrgbIqkYxZ2jI909zgzWZPbzU~TGUozZLFhJs31~BudyE0kpHBwGVYU3DUe5bxYOLQdBQjNHZAkFiBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: "L'Ecole No. 41 Ferguson",
            subTitle: 'United States - California - Blends',
            rating1: 'RP 95',
            rating2: '+3',
            year: "2004",
            quantity: '04',
            volume: 'Odd Ball (5000 mL)',
            cost: '$54.95',
            price: '$59.95'
        },
        {
            logo: 'https://s3-alpha-sig.figma.com/img/bfd9/6187/8d0d51c6db8a0d3d73a2a9f4f5e317cc?Expires=1664150400&Signature=fq7A1y7-9TeeJ6cd8RYmtOQFNVAAKjmY8WNuhCGxe1C~XGxuIAtUEskvLurpJV~sbliXMohuIbrO4sIZlMpFSfggr63UUx1H4l~zApyClLE7SLCuzHO1QfBGTFmHE0DHlfp3tUgPMEXljSH-9wqio9mB-JB95ncUv4I1wHUHdNZLZSRplNVfTlxWQ2HllEXRTLx-lgN7PmpukRWOR-mu6lHCxWgYNaX~DqMK3z8G-~H2mYsjqMPOexBKWnwB31zEdYGpewO0VIKkAEuBdzIlAhk46Pj55qXkuBENbf~hn-DTCC0O5Lo5Hey7cVuTaL1usWZYj1lD5~1mCXFKdFbEsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            title: 'Staglin Family Vineyard...',
            subTitle: 'France - Sauternes',
            rating1: 'RP 95',
            rating2: '+3',
            year: "1950's",
            quantity: '22',
            volume: 'Regular (750 mL)',
            cost: '$56.95',
            price: '$59.95'
        }
    ]

  return (
    <Box className='Main'>
        <Box className='Main__Cont'>
            <Box className='Main__Head'>
                <Heading as='h4' size='md'>Overview</Heading>
                <button>
                    <MdAddCircleOutline color='white' size='24px' />
                    ADD NEW WINE
                </button>
            </Box>           
            <Box className='Main__details'>
                {
                    details.map(el => (
                        <Box className='Main__details__single' boxShadow={el.boxShadow}>
                            <Box className='Main__title'>
                                <Text>{el.title}</Text>
                                {el.logo}
                            </Box>
                            <Text>{el.number}</Text>
                        </Box>
                    ))
                }
            </Box>
            <Box className='Main__Chart'>
                <Text mb='0.75rem' fontWeight='700' color='black'>Sales detail</Text>
                <Box className='Main__Chart__main'>
                    <Box padding='5px 10px'>
                        <Box className='Chart__salesOver'>
                            <Box>
                                <Text>Total Sales Overview</Text>
                                <Text>7 - 13 Aug, 2020</Text>
                            </Box>
                            <Box>
                                <Box display='flex'>
                                    <FiRefreshCw  />
                                    <Text mt='-5px' ml='10px'>Refresh Metrics</Text>
                                </Box>
                                <Box display='flex'>
                                    <Text mt='-5px'>Filter by | </Text>
                                    <Text mt='-5px' ml='5px' mr='5px' color='black'>This Week</Text>
                                    <AiOutlineDown color='black' />
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' >
                            <Box width='72%' paddingRight='1rem' borderRight='1px solid #FFF2EE' marginRight='2rem'>
                                <Box display='flex' justifyContent='space-between'  >
                                    <Box>
                                        <Text fontSize='48px' fontWeight='600' color='black'>$74,729.00</Text>
                                        <Text color='#2FCA72' display='flex' alignItems='center' gap='4px' fontWeight='700'><FaChartLine /> +21% from last week</Text>
                                    </Box>
                                    <Box display='flex' alignItems='center' gap='4px' >
                                        <FaChartLine color='#2FCA72' />
                                        <Text fontWeight='600' color='black'>Highest revenue since 2 weeks ago</Text>
                                    </Box>
                                </Box>
                                <Box mt='1rem'>
                                    <Chart />
                                </Box>
                            </Box>
                            <Box width='25%' height='auto' padding='20px 0'>
                                <Text fontWeight='700'>Total Profit</Text>
                                <Text color='#811434' fontSize='32px' fontWeight='700' mt='0.5rem'>$12,545.00</Text>
                                <Text color='#2FCA72' display='flex' alignItems='center' gap='4px' fontWeight='700' mt='0.5rem'><FaChartLine /> +23% from last week</Text>
                                <Text fontWeight='700' mt='3rem'>Total Products Sold</Text>
                                <Text color='black' fontSize='32px' fontWeight='700'>329</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='Main__Inventory'>
                <Text mb='0.75rem' fontWeight='700' color='black' fontSize='18px'>Inventory</Text>
                <TableContainer className='Inventory__Table'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th><Checkbox mr='10px' />  PRODUCT</Th>
                                <Th><Box className='Inventory__th'>RATING  <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                                <Th><Box className='Inventory__th'>VINTAGE <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                                <Th><Box className='Inventory__th'>QTY <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                                <Th><Box className='Inventory__th'>VOLUME <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                                <Th><Box className='Inventory__th'>COST <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                                <Th><Box className='Inventory__th'>PRICE <Box display='flex' flexDirection='column'  ml='5px'><button><BiUpArrow size='9px' /></button><button><BiDownArrow size='9px' /></button></Box></Box></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {products.map(el => (
                                <Tr>
                                    <Td className='Inventory__td'><Checkbox mr='13px' /> <Image src={el.logo} /> <Box ml='10px'><Text className='Inventory__td__proD'>{el.title}</Text><Text>{el.subTitle}</Text></Box></Td>
                                    <Td><Box className='Inventory__td__rating'><Box>{el.rating1}</Box><Box>{el.rating2}</Box></Box></Td>
                                    <Td>{el.year}</Td>
                                    <Td>{el.quantity}</Td>
                                    <Td>{el.volume}</Td>
                                    <Td>{el.cost}</Td>
                                    <Td color='black'>{el.price}</Td>
                                    <Td><AiOutlineDown color='black' /></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    </Box>
  )
}

export default Main