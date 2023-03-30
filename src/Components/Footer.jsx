import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box>
            <Box w="1192px" m="auto" mb={{ base: "48px", sm: "77.67px", lg: "48px" }} mt={{ base: "34px", sm: "67.7px", lg: "34px" }} display={"flex"} gap={{ base: "246px", sm: "60.95px", lg: "246px" }} flexDirection={{ base: "row", sm: "column", lg: "row" }}>
                <Box display="flex" flexDirection={{ base: "column", sm: "row", lg: "column" }} justifyContent="space-evenly">
                    <Box>
                        <Box display={"flex"} gap="7.42px">
                            <Link to={'/'}><Img w={{ base: "26.4px", sm: "42.63px", lg: "26.4px" }} h={{ base: "26.4px", sm: "42.63px", lg: "26.4px" }} src="./Images/logo.png" alt="logo" /></Link>
                            <Heading fontSize={{ base: "26px", sm: "44.23px", lg: "26px" }} fontWeight="600">CreativeProxies</Heading>
                        </Box>
                        <Text fontSize={{ base: "14px", sm: "23.82px", lg: "14px" }} mb="15px" fontWeight='400' color={'#111822'} lineHeight={{ base: "16.8px", sm: "28.58px", lg: "16.8px" }} w={{ base: "212px", sm: "361px", lg: "212px" }} h={{ base: "34px", sm: "58px", lg: "34px" }} mt={{ base: "8px", sm: "13px", lg: "8px" }} opacity={0.5}>Copyright © 2023 Creative Proxies. All rights reserved.</Text>
                    </Box>
                    <Box>
                        <Button display={"flex"} justifyContent="center" alignItems={"center"} border={"1px solid #5865F2"} bg='#5865F21A' borderRadius={{ base: "10px", sm: "17.01px", lg: "10px" }} w={{ base: "221px", sm: "375.99px", lg: "221px" }} h={{ base: "44px", sm: "74px", lg: "44px" }} fontSize={{ base: "16px", sm: "27.22px", lg: "16px" }} fontWeight='500'> <Img mr='5.67px' h={{ sm: "10.67px", sm: "18.15px", lg: "10.67px" }} w={{ base: "14.67px", sm: "24.95px", lg: "14.67px" }} src='./Images/surface1.png' alt='surface1' />Join Our Discord</Button>
                    </Box>
                </Box>

                <Box display={"flex"} justifyContent={{ base: "0", sm: "space-evenly", lg: "0" }} gap={{ base: "144px", sm: "0", lg: "144px" }}>
                    <Box>
                        <Heading color={"#111822"} opacity={0.25} fontSize={{ base: "14px", sm: '23.82px', lg: "14px" }} fontWeight="600">Explore</Heading>
                        <Box mt={{ base: "10px", sm: "22.12px", lg: "10px" }} lineHeight={{ base: "24.2px", sm: "52.12px", lg: "24.2px" }} fontWeight={"500"} fontSize={{ base: "16px", sm: "27.22px", lg: "16px" }}>
                            <Text>Proxy Location Checker</Text>
                            <Text>IPv6 Comptability</Text>
                            <Text>Blogs</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Heading color={"#111822"} opacity={0.25} fontSize={{ base: "14px", sm: '23.82px', lg: "14px" }} fontWeight="600">Resources</Heading>
                        <Box mt={{ base: "10px", sm: "22.12px", lg: "10px" }} lineHeight={{ base: "24.2px", sm: "52.12px", lg: "24.2px" }} fontWeight={"500"} fontSize={{ base: "16px", sm: "27.22px", lg: "16px" }}>
                            <Text>FAQs</Text>
                            <Text>Branding</Text>
                            <Text>Network Information</Text>
                            <Text>Imprint</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Heading color={"#111822"} opacity={0.25} fontSize={{ base: "14px", sm: '23.82px', lg: "14px" }} fontWeight="600">Support</Heading>
                        <Box mt={{ base: "10px", sm: "22.12px", lg: "10px" }} lineHeight={{ base: "24.2px", sm: "52.12px", lg: "24.2px" }} fontWeight={"500"} fontSize={{ base: "16px", sm: "27.22px", lg: "16px" }}>
                            <Text>Status</Text>
                            <Text>Terms of Service</Text>
                            <Text>Privacy Policy</Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Footer;