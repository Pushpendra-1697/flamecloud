import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <Box w="1192px" m="auto" mb="48px" mt="34px" display={"flex"} gap="246px">
                <Box>
                    <Box display={"flex"} gap="7.42px">
                        <Img w={"26.4px"} h="26.4px" src="./Images/logo.png" alt="logo" />
                        <Heading fontSize={'26px'} fontWeight="600">CreativeProxies</Heading>
                    </Box>
                    <Text fontSize={'14px'} mb="15px" fontWeight='400' color={'#111822'} lineHeight={'16.8px'} w="212px" h="34px" mt="8px">Copyright © 2023 Creative Proxies. All rights reserved.</Text>
                    <Button display={"flex"} justifyContent="center" alignItems={"center"} border={"1px solid #5865F2"} bg='#5865F21A' borderRadius={"10px"} w={"221px"} h="44px" fontSize={"16px"} fontWeight='500'> <Img mr='5.67px' h={"10.67px"} w="14.67px" src='./Images/surface1.png' alt='surface1' />Join Our Discord</Button>
                </Box>

                <Box display={"flex"} gap="100px">
                    <Box>
                        <Heading color={"#111822"} fontSize={"14px"} fontWeight="600">Explore</Heading>
                        <Box mt="10px" lineHeight={"24.2px"} fontWeight={"500"} fontSize={"16px"}>
                            <Text>Proxy Location Checker</Text>
                            <Text>IPv6 Comptability</Text>
                            <Text>Blogs</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Heading color={"#111822"} fontSize={"14px"} fontWeight="600">Resources</Heading>
                        <Box mt="10px" lineHeight={"24.2px"} fontWeight={"500"} fontSize={"16px"}>
                            <Text>FAQs</Text>
                            <Text>Branding</Text>
                            <Text>Network Information</Text>
                            <Text>Imprint</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Heading color={"#111822"} fontSize={"14px"} fontWeight="600">Support</Heading>
                        <Box mt="10px" lineHeight={"24.2px"} fontWeight={"500"} fontSize={"16px"}>
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