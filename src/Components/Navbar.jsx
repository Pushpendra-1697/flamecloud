import { Box, Button, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box display="flex" justifyContent={{base:"0", sm:"space-evenly", lg:"0"}} fontFamily="Figtree"  w={{ base: "80%", sm: "1200px", lg: "80%" }} textAlign={"center"} m="auto" p={{base:"1px", sm:"20px", lg:"1px"}}>
            <Img mt="17.87px" w={{ base: "25.06px", sm: "56.09px", lg: "25.06px" }} h={{ base: "25.06px", sm: "56.09px", lg: "25.06px" }} src={"./Images/logo.png"} alt="logo"></Img>
            <Text fontSize={{ base: "26px", sm: "55.24px", lg: "26px" }} style={{ fontStyle: "normal", fontWeight: "600", lineHeight: "31px", color: "#111822", marginLeft: "16.94px", marginTop: "14px" }}>CreativeProxies</Text>
            <Box display={{ base: "flex", sm: "none", lg: "flex" }} gap="30px" ml="31px" fontStyle={"normal"} fontWeight="400" lineHeight="19px" letterSpacing={"-0.02em"} color="#111822" mt="20px">
                <Text>Pricing</Text>
                <Box><select>
                    <option value={""}>Explore Tools</option>
                </select></Box>
                <Box><select>
                    <option value={""}>Resources</option>
                </select></Box>
                <Text>FAQs</Text>
                <Text>Blogs</Text>
            </Box>
            <Box display={{ base: "flex", sm: "none", lg: "flex", md: "none" }} ml="130.67px" mt="20.25px" mr={"22px"}>
                <Img mt="5px" w="14.67px" h="10.67px" src={"./Images/surface1.png"} alt="image" />
                <Text color={"blue"} ml="5.67px">Join Discord</Text>
            </Box>

            <Box display={{ base: "block", sm: "none", lg: "block", md: "none" }} h="31.5px" position={"absolute"} borderLeft="1px solid #D9D8D6" left={"74.7%"} top="15px"></Box>

            <Box display={"flex"} ml="22px">
                <Text mt="20.25px" display={{ base: "block", sm: "none", lg: "block" }} mr="32px">Log in</Text>
                <Button fontSize={{ base: "16px", sm: "29.1px", lg: "16px" }} mb="10px" color={"white"} bg="blue" mt="10px" p={{ base: "10px 22px", sm: "26.19px 40.5px", lg: "10px 22px" }} display="flex" justifyContent={"center"} alignItems="center">Get Started</Button>
            </Box>
            <Box onClick={onOpen} ml="2%" padding={"15px"} color={"#077BFF"} bg="#077BFF40" borderRadius={"8.52px"} display={{ base: 'none', sm: "block", lg: "none" }}>
                <RxHamburgerMenu fontSize={"38px"} />
            </Box>

            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Navbar Pages</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                            </Box>
                                <Text>Login</Text>
                                <Text>Blogs</Text>
                                <Text>FAQs</Text>
                                <Text>Resources</Text>
                                <Text>Pricing</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    );
}

export default Navbar;