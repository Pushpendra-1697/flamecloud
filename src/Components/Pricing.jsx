import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';

const Pricing = () => {
    return (
        <>
            <Box textAlign={"center"} mb={{ base: "79px", sm: "66.69px", lg: "79px" }} display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center" w={{ base: "100%", sm: "100%", lg: "50%" }} m="auto">
                <Heading mb={{ base: "10px", sm: "18.52px", lg: "10px" }} lineHeight={{ base: "43.2px", sm: "79.99px", lg: "43.2px" }} fontSize={{ base: "36px", sm: "66.66px", lg: "36px" }}>You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span></Heading>
                <Text w={{ base: "100%", sm: "100%", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "39.99px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "33.33px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>

            <Box display={"flex"} flexDirection={{ base: "column", sm: "column", lg: "row" }} justifyContent="center" alignItems={"center"} gap={{ base: "20px", sm: "69.53px", lg: "20px" }} w={{ base: "100%", sm: "100%", lg: "50%" }} m="auto" mt={["40%", "40%", "0%"]}>
                <Box borderRadius={{ base: "5px", sm: "8.55px", lg: "5px" }} border={"1px solid #1E1E1E1A"} h={{ base: "447px", sm: "764.06px", lg: "447px" }} w={{ base: "344px", sm: "588px", lg: "344px" }} bg='#1E1E1E03'>
                    <Box display={"flex"} gap={{ base: "80px", sm: "149.31px", lg: "80px" }}>
                        <Box p="26px 0 14px 28px">
                            <Text w="40px" h="35px" display={"flex"} justifyContent="center" alignItems={"center"} bg="#2E73E8" borderRadius={"10px"} color={'#FFFFFF'} border={"1px solid "} padding="10px" fontSize={"8px"}>V<span style={{ fontSize: "18px" }}>4</span></Text>
                            <Heading mt="8px" fontWeight={"600"} fontSize={{ base: "20px", sm: "34.19px", lg: "20px" }}>IPv4 Proxies</Heading>
                            <Text fontWeight={"400"} mt="8px" opacity={0.5}>Static/Rotating</Text>
                        </Box>
                        <Box p="37px 40px 24px 0" lineHeight={{ base: "18px", sm: "41.02px", lg: "18px" }}>
                            <Text fontWeight={'600'} fontSize={{ base: "12px", sm: "20.51px", lg: "12px" }}>FROM</Text>
                            <Text><span style={{ fontSize: "18px", color: "#077BFF" }}>$4.75</span>/day</Text>
                            <Text fontSize={{ base: "12px", sm: "20.51px", lg: "12px" }}>OR</Text>
                            <Text><span style={{ fontSize: "18px", color: "#077BFF" }}>$116.75</span>/mo</Text>
                        </Box>
                    </Box>

                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />

                    <Box fontSize={{ base: "16px", sm: "27.37px", lg: "16px" }} pl="28px" fontWeight={"400"} mt="14px" lineHeight={{ base: "28.2px", sm: "52.85px", lg: "28.2px" }} mb="21px">
                        <Text mb="10px" opacity={0.5}>Plan Includes :</Text>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">100 Threads</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Dedicated IP Pool</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Residential Proxy</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Unlimited Bandwidth</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Worldwide Locations</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">40 GBps</Text>
                        </Box>
                    </Box>

                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />


                    <Box>
                        <Button m="16px 24px 27px 25px" fontSize={{ base: "18px", sm: "30.77px", lg: "18px" }} fontWeight="600" color={"#FFFFFF"} bg="#077BFF" borderRadius={{ base: "5px", sm: "8.55px", lg: "5px" }} w={{ base: "295px", sm: "504.24px", lg: "295px" }} h={{ base: "47px", sm: "80.34px", lg: "47px" }}>View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} /></Button>
                    </Box>
                </Box>




                <Box display={{ base: "block", sm: "none", lg: "block" }} borderRadius={"2px"} bg="#16D113" position={'absolute'} left="53%" top={["72.5%", "72.5%", "66.1%"]} zIndex={"100px"}><Text p="3px 8px" display={"flex"} justifyContent="center" alignItems={"center"} fontSize="12px" color={"#FFFFFF"}>BEST SELLER</Text></Box>

                <Box mt="40px" borderRadius={{ base: "5px", sm: "8.55px", lg: "5px" }} border={"1px solid #16D113"} h={{ base: "495px", sm: "846.92px", lg: "495px" }} w={{ base: "344px", sm: "588.57px", lg: "344px" }} bg='#16D1131A'>
                    <Box display={"flex"} gap={{ base: "80px", sm: "149.31px", lg: "80px" }}>
                        <Box p="26px 0 14px 28px">
                            <Text w="40px" h="35px" display={"flex"} justifyContent="center" alignItems={"center"} bg="#25CD08" borderRadius={"10px"} color={'#FFFFFF'} border={"1px solid "} padding="10px" fontSize={"8px"}>V<span style={{ fontSize: "18px" }}>6</span></Text>
                            <Heading mt="8px" fontWeight={"600"} fontSize={{ base: "20px", sm: "34.19px", lg: "20px" }}>IPv6 Proxies</Heading>
                            <Text fontWeight={"400"} mt="8px" opacity={0.5}>Static/Rotating</Text>
                        </Box>
                        <Box p="37px 40px 24px 0" lineHeight={"18px"}>
                            <Text fontWeight={'600'} fontSize={{ base: "12px", sm: "20.51px", lg: "12px" }}>FROM</Text>
                            <Text><span style={{ fontSize: "18px", color: "#16D113" }}>$4.75</span>/day</Text>
                            <Text fontSize={{ base: "12px", sm: "20.51px", lg: "12px" }}>OR</Text>
                            <Text><span style={{ fontSize: "18px", color: "#16D113" }}>$116.75</span>/mo</Text>
                        </Box>
                    </Box>

                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />

                    <Box fontSize={{ base: "16px", sm: "27.37px", lg: "16px" }} pl="28px" fontWeight={"400"} mt="14px" lineHeight={{ base: "28.2px", sm: "52.85px", lg: "28.2px" }} mb="21px">
                        <Text mb="10px" opacity={0.5}>Plan Includes :</Text>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">100 Threads</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Dedicated IP Pool</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Residential Proxy</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Unlimited Bandwidth</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Worldwide Locations</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">Dedicated Subnets</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">1 Octilion IPS</Text>
                        </Box>
                        <Box display={"flex"} gap={{ base: "8px", sm: "13px", lg: "8px" }}>
                            <Img textAlign={"center"} w={{ base: "12.5px", sm: "21.37px", lg: "12.5px" }} h={{ base: "8.5px", sm: "14.53px", lg: "8.5px" }} src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">Septiltion per Location</Text>
                        </Box>
                    </Box>


                    <hr style={{ width: "295px", margin: "auto", color: "#D9D8D6" }} />


                    <Box>
                        <Button m="16px 24px 27px 25px" fontSize={{ base: "18px", sm: "30.77px", lg: "18px" }} fontWeight="600" color={"#FFFFFF"} bg="#2CE517" borderRadius={{ base: "5px", sm: "8.55px", lg: "5px" }} w={{ base: "295px", sm: "504.24px", lg: "295px" }} h={{ base: "47px", sm: "80.34px", lg: "47px" }}>View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} /></Button>
                    </Box>


                </Box>
            </Box>



            <Box pt={['13%','13%', "0"]} pb={['13%','13%', "0"]} borderRadius={{ base: "5px", sm: "7.24px", lg: "5px" }} border={"1px solid #1E1E1E1A"} bg="#1E1E1E1A" display="flex" justifyContent={"center"} alignItems="center" w={{ base: "90%", sm: "90%", lg: "708px" }} h={{ base: "auto", sm: "auto", lg: "142px" }} gap={{ base: "34px", sm: "49.24px", lg: "34px" }} margin="auto" mt={{ base: "21px", sm: "49px", lg: "21px" }} ml={{ base: "3%", sm: "3%", lg: "25.8%" }} flexDirection={["column", "column", 'row']}>
                <Box>
                    <Box display={"flex"} justifyContent="center" alignItems={"center"} borderRadius="8px" bg="linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)" w={{ base: "35px", sm: "57.93px", lg: "35px" }} padding={{ base: "5px", sm: "10px", lg: "7px" }}>
                        <Img src="./Images/Price.svg" alt="Prince" />
                    </Box>
                    <Heading fontSize={{ base: "20px", sm: "28.96px", lg: "20px" }} fontWeight="600">Become a Reseller</Heading>
                    <Text fontSize={{ base: "16px", sm: "23.17px", lg: "16px" }} opacity={0.5} fontWeight="400">200+ Happy Resellers</Text>
                </Box>
                <Box fontSize={{ base: "16px", sm: "23.17px", lg: "16px" }}>
                    <Text mb={{ base: "10px", sm: "14.48px", lg: "10px" }} opacity={0.5}>Plan Includes :</Text>
                    <Box display={"flex"} gap={{ base: "8px", md: "11.59px", lg: "8px" }}>
                        <Img textAlign={"center"} w={{ base: "12.5px", sm: "18.1px", lg: "12.5px" }} h={{ base: "8.5px", sm: "12.31px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Whitelabel IP Pool</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w={{ base: "12.5px", sm: "18.1px", lg: "12.5px" }} h={{ base: "8.5px", sm: "12.31px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Whitelabel Subnets</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w={{ base: "12.5px", sm: "18.1px", lg: "12.5px" }} h={{ base: "8.5px", sm: "12.31px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Residential Proxy</Text>
                    </Box>
                </Box>
                <Box>
                    <Box display={"flex"} gap={{ base: "8px", md: "11.59px", lg: "8px" }}>
                        <Img textAlign={"center"} w={{ base: "12.5px", sm: "18.1px", lg: "12.5px" }} h={{ base: "8.5px", sm: "12.31px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Custom Bandwidth</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w={{ base: "12.5px", sm: "18.1px", lg: "12.5px" }} h={{ base: "8.5px", sm: "12.31px", lg: "8.5px" }} src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Priority Support</Text>
                    </Box>
                </Box>

            </Box> 
            
        </>
    );
}

export default Pricing