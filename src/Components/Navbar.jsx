import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return (
        <Box borderBottom={"1px solid black"} display="flex" fontFamily="Figtree">
            <Img mt="17.87px" w="25.06px" h="25.06px" src={"./Images/logo.png"} alt="logo"></Img>
            <Text style={{ fontStyle: "normal", fontWeight: "600", fontSize: "26px", lineHeight: "31px", color: "#111822", marginLeft: "16.94px", marginTop: "14px" }}>CreativeProxies</Text>
            <Box display={"flex"} gap="30px" ml="31px" fontStyle={"normal"} fontWeight="400" lineHeight="19px" letterSpacing={"-0.02em"} color="#111822" mt="20px">
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
            <Box display={"flex"} ml="130.67px" mt="20.25px" mr={"22px"}>
                <Img mt="5px" w="14.67px" h="10.67px" src={"./Images/surface1.png"} alt="image" />
                <Text color={"blue"} ml="5.67px">Join Discord</Text>
            </Box>
            <Text mt="20.25px">|</Text>
            <Box display={"flex"} ml="22px">
                <Text mt="20.25px" mr="32px">Log in</Text>
                <Button mb="10px" color={"white"} bg="blue" mt="10px">Get Started</Button>
            </Box>
        </Box>
    );
}

export default Navbar;