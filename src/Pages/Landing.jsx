import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Landing = () => {
  return (
    <Box fontFamily={"Figtree"} fontStyle="normal">
        <Text color={"#111822"} display={"flex"} justifyContent="center" alignItems={"center"} mt="95px">WELCOME TO CREATIVE PROXIES</Text>
        <Box  fontSize={"56px"} lineHeight="67.2px" m="3px 400px" w={"824px"} h="134px">
        We are the <span style={{color: "#077BFF"}}>Fastest</span> and the <span style={{color: "#16D113"}}>Most Reliable</span> Proxy Service since 2020
        </Box>
        <Box mb="26px" mt="17px" lineHeight={"26.4px"} m="auto" fontSize={"22px"} w="509px" fontWeight={"500px"} h="52px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Box>
        <Box><Button color={"white"} fontSize="18px">Get Started<AiOutlineArrowRight/></Button></Box>
    </Box>
  );
}

export default Landing;