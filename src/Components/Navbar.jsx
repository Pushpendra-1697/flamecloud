import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const navigate = useNavigate();

    const handleClickToNavigateProxyLocationPage = () => {
        navigate('/proxy');
    };

    return (
        <Flex w="100%" pos="fixed" top="0" left="0" bg="#FFFFFF" zIndex={"1000"} >
            <Flex w={"80%"} m="auto" flexDir={"row"} alignItems="center" justifyContent={"space-between"} borderBottom="1px solid #D9D8D6" py="20px" >
                <Flex flexDir={"row"} cursor="pointer">
                    <Link to={'/'}><Image src={'./Images/logo.png'} alt="Logo" mr="8.76px" /></Link>
                    <Text color={"#111822"} fontSize={["16px", "16px", "20px", "20px", "20px"]} fontWeight={"600"} lineHeight="31px" >CreativeProxies</Text>
                </Flex>

                <Flex flexDir={"row"} alignItems="center" justifyContent={"space-between"} display={["none", "none", "none", "flex", "flex"]} >
                    <Flex mr={["130px", "130px", "130px", "10px", "120px"]}>
                        <Text letterSpacing={"-0.02em"} color={"#111822"} fontSize="15px" mr={["30px", "30px", "30px", "20px", "25px"]} fontWeight={"400"} lineHeight="19.2px">Pricing</Text>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px", "30px", "30px", "20px", "25px"]} >
                            <Text letterSpacing={"-0.02em"} color={"#111822"} fontSize="15px" mr="5px" fontWeight={"400"} lineHeight="19.2px">Explore Tools</Text>
                            <BiChevronDown fontSize={"15px"} color={"#111822"} />
                        </Flex>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px", "30px", "30px", "20px", "25px"]}>
                            <Text color={"#111822"} fontSize="15px" mr="5px" fontWeight={"400"} lineHeight="19.2px">Resources</Text>
                            <BiChevronDown fontSize={"15px"} color={"#111822"} />
                        </Flex>
                        <Text mr={["30px", "30px", "30px", "20px", "25px"]} color={"#111822"} fontSize="13px" fontWeight={"400"} lineHeight="19.2px">FAQs</Text>
                        <Text color={"#111822"} fontSize="15px" fontWeight={"400"} lineHeight="19.2px">Blogs</Text>
                    </Flex>
                    <Flex flexDir={"row"} alignItems="center" display={["none", "none", "none", "none", "flex"]} >
                        <Image src={'./Images/surface1.png'} alt="Discard" mr="5.7px" />
                        <Text color={"#5865F2"} fontSize="15px" fontWeight={"500"} lineHeight="19px" >Join Discord</Text>
                    </Flex>
                    <Divider display={["none", "none", "none", "none", "initial"]} mx={["22px", "22px", "22px", "2px", "18px"]} orientation='vertical' border="1px" borderColor={'#D9D8D6'} h="30px" />
                    <Text color={"#111822"} fontSize="15px" fontWeight={"400"} lineHeight="19.2px">Login</Text>
                </Flex>

                <Flex>
                    <Flex py="10px" px={["11px", "11px", "15px", "22px", "22px"]} cursor={"pointer"} flexDir={"row"} alignItems="center" justifyContent={"space-between"} onClick={handleClickToNavigateProxyLocationPage} bg="#077BFF" borderRadius={"5px"} >
                        <Text color={"#fff"} fontSize={["15px", "15px", "16px", "16px", "15px"]} fontWeight={"600"} lineHeight="19.2px">Get Started</Text>
                    </Flex>

                    <Flex ml="10px" display={["flex", "flex", "flex", "none", "none"]} flexDir={"row"} alignItems="center" justifyContent={"space-between"} bg="rgba(7, 123, 255, 0.25)" px="15px" py="7px" borderRadius={"8.52px"} >
                        <GiHamburgerMenu color='#077BFF' fontSize={"25px"} m="0" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;