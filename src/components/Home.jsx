import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import img from '../btc.png'

const Home = () => {
  return (
    <Box w={'full'} h={'86vh'} bgColor={'blackAlpha.900'}>
      <Image src={img} objectFit={'contain'} w={'full'} h={'full'} filter={'grayscale(1)'}/>
      <Text color={'whiteAlpha.700'} fontSize={'5xl'} textAlign={'center'} fontWeight={'thin'}
      mt={'-16'}>RattanXcrypto</Text>
    </Box>
  )
}

export default Home
