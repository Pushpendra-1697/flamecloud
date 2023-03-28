import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiFillStar, AiFillUnlock } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { BiMessageRounded } from 'react-icons/bi';

const Landing = () => {
    const [featuresData, setFeaturesData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let res = await fetch(`https://blog-database-ten.vercel.app/feature`);
            res = await res.json();
            setFeaturesData(res);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Box fontFamily={"Figtree"} fontStyle="normal">
            <Text color={"#111822"} display={"flex"} justifyContent="center" alignItems={"center"} mt="95px">WELCOME TO CREATIVE PROXIES</Text>
            <Box fontSize={"56px"} lineHeight="67.2px" m="3px 400px" w={"824px"} h="134px">
                We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service since 2020
            </Box>
            <Box mb="26px" mt="17px" lineHeight={"26.4px"} m="auto" fontSize={"22px"} w="509px" fontWeight={"500"} h="52px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Box>
            <Box textAlign={"center"} mt="26px"><Button bg="blue" w="222px" h={"47px"} color={"white"} fontSize="18px">Get Started<AiOutlineArrowRight /></Button></Box>
            <Box bg="#00B67A1A" w="200px" borderRadius={"10px"} m="auto" mt="22px" mb="54px">
                <Box padding={"10px"}>
                    <Icon bg="#00B67A" color={"white"} as={AiFillStar} />
                    <Icon ml="6.61px" bg="#00B67A" color={"white"} as={AiFillStar} />
                    <Icon ml="6.61px" bg="#00B67A" color={"white"} as={AiFillStar} />
                    <Icon ml="6.61px" bg="#00B67A" color={"white"} as={AiFillStar} />
                    <Icon ml="6.61px" bg="#00B67A" color={"white"} as={AiFillStar} />
                </Box>
                <Text padding={"10px"} mt="8.45px">Rated 4.5 on <Icon color="#00B67A" as={AiFillStar} /> Trustpilot</Text>
            </Box>
            <hr style={{ width: "588px", margin: "auto" }} />
            <Box display={"grid"} gap="16.16px" gridTemplateColumns="repeat(4,1fr)" width="1200px" m="auto" mt="36.36px" mb="138.36px">
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 46.84px 26px 51px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <AiFillUnlock />
                    <Text ml={"16px"} lineHeight={"21.6px"} fontSize={"18px"} width={"148px"}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 46.84px 26px 51px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <AiFillUnlock />
                    <Text ml={"16px"} lineHeight={"21.6px"} fontSize={"18px"} width={"148px"}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 46.84px 26px 51px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <AiFillUnlock />
                    <Text ml={"16px"} lineHeight={"21.6px"} fontSize={"18px"} width={"148px"}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 46.84px 26px 51px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <AiFillUnlock />
                    <Text ml={"16px"} lineHeight={"21.6px"} fontSize={"18px"} width={"148px"}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
            </Box>
            <Box mb="177px" p="115px 671px 545px 451px" fontWeight={"500"} bg="#0566D4" h="903px">
                <Text w={"550px"} mb="10px" color={"#FFFFFF"} fontSize="36px" >Why we are the Best Proxy Providers</Text>
                <Text ml="20px" w={"465px"} color={"#FFFFFF"} lineHeight={"21.6px"} mt="10px" fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

                <Box display={"grid"} gap="16px" gridTemplateColumns="repeat(4,1fr)">
                    {featuresData && featuresData.map(({ id, feature, lorem }) =>
                        <Box borderRadius={"5px"} color={"#FFFFFF"} mt="30px" w="186px" padding={"25px"} border={"1px solid #D4EAE8"} key={id}>
                            <BiMessageRounded />
                            <Heading fontSize={"20px"}>{feature}</Heading>
                            <Text>{lorem}</Text>
                        </Box>
                    )}
                </Box>
            </Box>
            <Box mb="99px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center">
                <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span></Heading>
                <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>

            <Box w="1192px" h="859px" mt="250px" bg="#F6FAFF" borderRadius={"5px"} border="1px solid #1E1E1E1A" m="auto" mb="120px">
                <Box p="65px 40px 35px 40px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center">
                    <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog</Heading>
                    <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    <Text mt="10px" color={"#077BFF"}>Read All Blogs <Icon as={AiOutlineArrowRight} /></Text>
                </Box>


                <Box p="0 40px" display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap="25px">
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>
                    <Box >
                        <Box w="354px" h="221px" bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={"20px"}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px">Category name here</Text>
                    </Box>

                </Box>
            </Box>

            <hr style={{ width: "1192px", color: "#D9D8D6", margin: "auto" }} />

            <Box w="1192px" m="auto" mb="48px" mt="34px" display={"flex"} gap="246px">
                <Box>
                    <Box display={"flex"} gap="7.42px">
                        <Img w={"26.4px"} h="26.4px" src="./Images/logo.png" alt="logo" />
                        <Heading fontSize={'26px'} fontWeight="600">CreativeProxies</Heading>
                    </Box>
                    <Text fontSize={'14px'} mb="15px" fontWeight='400' color={'#111822'} lineHeight={'16.8px'} w="212px" h="34px" mt="8px">Copyright © 2023 Creative Proxies. All rights reserved.</Text>
                    <Button display={"flex"} justifyContent="center" alignItems={"center"} border={"1px solid #5865F2"} bg='#5865F21A' borderRadius={"10px"} w={"221px"} h="44px" fontSize={"16px"} fontWeight='500'> <Img mr='5.67px' h={"10.67px"} w="14.67px" src='./Images/surface1.png'  alt='surface1'/>Join Our Discord</Button>
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
    );
}

export default Landing;

