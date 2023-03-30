import { Box, Button, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        <Text w={["75px", "75px", "auto"]} color={"#fff"} fontSize={["15px", "15px", "16px", "16px", "15px"]} fontWeight={"600"} lineHeight="19.2px">Get Started</Text>
                    </Flex>

                    <Flex ml="10px" display={["flex", "flex", "flex", "none", "none"]} flexDir={"row"} alignItems="center" justifyContent={"space-between"} bg="rgba(7, 123, 255, 0.25)" px="15px" py="7px" borderRadius={"8.52px"} >
                        <GiHamburgerMenu onClick={onOpen} color='#077BFF' fontSize={"25px"} m="0" />
                    </Flex>
                </Flex>
            </Flex>


            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader textAlign={"center"}>Navbar Pages</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap={"10px"}>
                            <Text color={"#111822"} fontSize="15px" mr={["30px", "30px", "30px", "20px", "25px"]} fontWeight={"400"}>Pricing</Text>
                            <Text color={"#111822"} fontSize="15px" fontWeight={"400"} >Resources</Text>
                            <Text color={"#111822"} fontSize="13px" fontWeight={"400"} >FAQs</Text>
                            <Text color={"#111822"} fontSize="15px" fontWeight={"400"} >Blogs</Text>
                            <Text color={"#111822"} fontSize="15px" fontWeight={"500"} >Join Discord</Text>
                            <Text color={"#111822"} fontSize="15px" fontWeight={"400"} >Login</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant={"outline"} colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>



        </Flex>
    );
};

export default Navbar;