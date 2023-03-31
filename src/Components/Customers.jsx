import { Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react'

const Customers = () => {
    return (
        <>
            <Box textAlign={"center"}  display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center"  w={{ base: "100%", sm: "100%", lg: "40%" }} m={{ base: "auto" }} mt={{ base: "30%", sm: "30%", lg: "180px" }} mb={{ base: "10%", sm: "10%", lg: "34px" }}>
                <Heading mb={{ base: "10px", sm: "16.49px", lg: "10px" }} lineHeight={"43.2px"} fontSize={{ base: '36px', sm: "59.31px", lg: "36px" }}>Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies</Heading>
                <Text w={{ base: '100%', sm: "100%", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "35.58px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "29.65px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>



            <Box display={"flex"} w={{ base: "100%", sm: "100%", lg: "75%" }} m="auto" gap={{ base: "17px", sm: "28.01px", lg: "17px" }} flexDirection={{ base: "column", sm: "column", lg: "row" }} justifyContent="center" alignItems={"center"} ml={["3%", "3%", "auto"]}>
                <Box border={"1px solid rgba(22, 209, 19, 0.5)"} borderRadius={{ base: "5px", sm: "8.24px", lg: "5px" }} bg="#1E1E1E03" w={{ base: "386px", sm: "635.91px", lg: "386px" }} h={{ base: "248px", sm: "408.56px", lg: "248px" }}>
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text lineHeight={{ base: "21px", sm: "35.58px", lg: "21px" }} fontSize={{ base: "16px", sm: "29.65px", lg: "16px" }} mt={{ base: "19.1px", sm: "31.47px", lg: "19.1px" }} w={{ base: "335px", sm: "551.89px", lg: "335px" }} h={{ base: "88px", sm: "144px", lg: "88px" }}>“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt={{ base: "12px", sm: "28.91px", lg: "12px" }} display={"flex"} gap="10px">
                            <Img w={{ base: "48px", sm: "79.08px", lg: "48px" }} h={{ base: "48px", sm: "79.08px", lg: "48px" }} src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={{ base: "18px", sm: "29.65px", lg: "18px" }}>ECHO DZNS</Heading>
                                <Text opacity={0.5} fontSize={{ base: "16px", sm: "26.36px", lg: "16px" }}>Web Designer, CreativeProxies</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box border={"1px solid rgba(22, 209, 19, 0.5)"} borderRadius={{ base: "5px", sm: "8.24px", lg: "5px" }} bg="#1E1E1E03" w={{ base: "386px", sm: "635.91px", lg: "386px" }} h={{ base: "248px", sm: "408.56px", lg: "248px" }}>
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text lineHeight={{ base: "21px", sm: "35.58px", lg: "21px" }} fontSize={{ base: "16px", sm: "29.65px", lg: "16px" }} mt={{ base: "19.1px", sm: "31.47px", lg: "19.1px" }} w={{ base: "335px", sm: "551.89px", lg: "335px" }} h={{ base: "88px", sm: "144px", lg: "88px" }}>“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt={{ base: "12px", sm: "28.91px", lg: "12px" }} display={"flex"} gap="10px">
                            <Img w={{ base: "48px", sm: "79.08px", lg: "48px" }} h={{ base: "48px", sm: "79.08px", lg: "48px" }} src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={{ base: "18px", sm: "29.65px", lg: "18px" }}>John Doe</Heading>
                                <Text opacity={0.5} fontSize={{ base: "16px", sm: "26.36px", lg: "16px" }}>Random Text, ABC</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box border={"1px solid rgba(22, 209, 19, 0.5)"} borderRadius={{ base: "5px", sm: "8.24px", lg: "5px" }} bg="#1E1E1E03" w={{ base: "386px", sm: "635.91px", lg: "386px" }} h={{ base: "248px", sm: "408.56px", lg: "248px" }}>
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                            <Img w={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} h={{ base: "23.8px", sm: "39.21px", lg: "23.8px" }} src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text lineHeight={{ base: "21px", sm: "35.58px", lg: "21px" }} fontSize={{ base: "16px", sm: "29.65px", lg: "16px" }} mt={{ base: "19.1px", sm: "31.47px", lg: "19.1px" }} w={{ base: "335px", sm: "551.89px", lg: "335px" }} h={{ base: "88px", sm: "144px", lg: "88px" }}>“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt={{ base: "12px", sm: "28.91px", lg: "12px" }} display={"flex"} gap="10px">
                            <Img w={{ base: "48px", sm: "79.08px", lg: "48px" }} h={{ base: "48px", sm: "79.08px", lg: "48px" }} src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={{ base: "18px", sm: "29.65px", lg: "18px" }}>John Doe</Heading>
                                <Text fontSize={{ base: "16px", sm: "26.36px", lg: "16px" }} opacity={0.5}>Random Text, ABC</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Customers