import { Alert, AlertIcon, Box, Button, Heading, Img, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiFillStar, AiFillUnlock } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { BiMessageRounded } from 'react-icons/bi';
import { GiFrogPrince } from 'react-icons/gi'

const Landing = () => {
    const [featuresData, setFeaturesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            let res = await fetch(`https://blog-database-ten.vercel.app/feature`);
            res = await res.json();
            setLoading(false);
            setError(false);
            setFeaturesData(res);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };
    return (
        <Box fontFamily={"Figtree"} fontStyle="normal">
            <Box textAlign={"center"} mt="2px">
                {loading && <Spinner size={"lg"} color="red" />}
                {error && <Alert status='error'>
                    <AlertIcon />
                    Something went Wrong!😒
                </Alert>}
            </Box>


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



            <Box mb="177px" fontWeight={"500"} bg="#0566D4">
                <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                <Box pt="115px">
                    <Text w={"550px"} mb="10px" color={"#FFFFFF"} fontSize="36px" >Why we are the Best Proxy Providers</Text>
                    <Text ml="20px" w={"465px"} color={"#FFFFFF"} lineHeight={"21.6px"} mt="10px" fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                </Box>
                </Box>

                <Box pb="114px" w={"85%"} m="auto" display={"grid"} gap="16px" gridTemplateColumns="repeat(4,1fr)">
                    {featuresData && featuresData.map(({ id, feature, lorem }) =>
                        <Box w="286px" h="160px" borderRadius={"5px"} color={"#FFFFFF"} mt="30px" padding={"25px"} border={"1px solid #D4EAE8"} key={id} p="22px 25px">
                            <BiMessageRounded />
                            <Heading m="9.53px 0 8px 0" fontWeight={"600"} fontSize={"20px"}>{feature}</Heading>
                            <Text lineHeight={"16.8px"} fontSize={"14px"} fontWeight="400">{lorem}</Text>
                        </Box>
                    )}
                </Box>
            </Box>





            <Box mb="79px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center">
                <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span></Heading>
                <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>

            <Box display={"flex"} justifyContent="center" alignItems={"center"} gap="20px">
                <Box borderRadius={"5px"} border={"1px solid #1E1E1E1A"} h={"447px"} w="344px" bg='#1E1E1E03'>
                    <Box display={"flex"} gap="80px">
                        <Box p="26px 0 14px 28px">
                            <Text w="40px" h="35px" display={"flex"} justifyContent="center" alignItems={"center"} bg="#2E73E8" borderRadius={"10px"} color={'#FFFFFF'} border={"1px solid "} padding="10px" fontSize={"8px"}>V<span style={{ fontSize: "18px" }}>4</span></Text>
                            <Heading mt="8px" fontWeight={"600"} fontSize={"20px"}>IPv4 Proxies</Heading>
                            <Text fontWeight={"400"} mt="8px">Static/Rotating</Text>
                        </Box>
                        <Box p="37px 40px 24px 0" lineHeight={"18px"}>
                            <Text fontWeight={'600'} fontSize="12px">FROM</Text>
                            <Text><span style={{ fontSize: "18px", color: "#077BFF" }}>$4.75</span>/day</Text>
                            <Text fontSize={"12px"}>OR</Text>
                            <Text><span style={{ fontSize: "18px", color: "#077BFF" }}>$116.75</span>/mo</Text>
                        </Box>
                    </Box>
                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
                    <Box pl="28px" fontWeight={"400"} mt="14px" lineHeight={"28.2px"} mb="21px">
                        <Text mb="10px">Plan Includes :</Text>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">100 Threads</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Dedicated IP Pool</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Residential Proxy</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Unlimited Bandwidth</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Worldwide Locations</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">40 GBps</Text>
                        </Box>
                    </Box>
                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
                    <Box>
                        <Button m="16px 24px 27px 25px" fontSize={'18px'} fontWeight="600" color={"#FFFFFF"} bg="#077BFF" borderRadius={"5px"} w={"295px"} h="47px">View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} /></Button>
                    </Box>
                </Box>

                <Box mt="40px" borderRadius={"5px"} border={"1px solid #16D113"} h="495px" w='344px' bg='#16D1131A'>


                    <Box display={"flex"} gap="80px">
                        <Box p="26px 0 14px 28px">
                            <Text w="40px" h="35px" display={"flex"} justifyContent="center" alignItems={"center"} bg="#25CD08" borderRadius={"10px"} color={'#FFFFFF'} border={"1px solid "} padding="10px" fontSize={"8px"}>V<span style={{ fontSize: "18px" }}>6</span></Text>
                            <Heading mt="8px" fontWeight={"600"} fontSize={"20px"}>IPv4 Proxies</Heading>
                            <Text fontWeight={"400"} mt="8px">Static/Rotating</Text>
                        </Box>
                        <Box p="37px 40px 24px 0" lineHeight={"18px"}>
                            <Text fontWeight={'600'} fontSize="12px">FROM</Text>
                            <Text><span style={{ fontSize: "18px", color: "#16D113" }}>$4.75</span>/day</Text>
                            <Text fontSize={"12px"}>OR</Text>
                            <Text><span style={{ fontSize: "18px", color: "#16D113" }}>$116.75</span>/mo</Text>
                        </Box>
                    </Box>
                    <hr style={{ width: "295px", margin: "auto", color: "#25CD08" }} />
                    <Box pl="28px" fontWeight={"400"} mt="14px" lineHeight={"28.2px"} mb="21px">
                        <Text mb="10px">Plan Includes :</Text>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">100 Threads</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Dedicated IP Pool</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Residential Proxy</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Unlimited Bandwidth</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                            <Text mt="-4px">Worldwide Locations</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">Dedicated Subnets</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">1 Octilion IPS</Text>
                        </Box>
                        <Box display={"flex"} gap="8px">
                            <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right1.png' alt='right' />
                            <Text mt="-4px">Septiltion per Location</Text>
                        </Box>
                    </Box>
                    <hr style={{ width: "295px", margin: "auto", color: "#D9D8D6" }} />
                    <Box>
                        <Button m="16px 24px 27px 25px" fontSize={'18px'} fontWeight="600" color={"#FFFFFF"} bg="#2CE517" borderRadius={"5px"} w={"295px"} h="47px">View Pricing <Icon ml={"4px"} as={AiOutlineArrowRight} /></Button>
                    </Box>


                </Box>
            </Box>






            <Box borderRadius={"5px"} border={"1px solid #1E1E1E1A"} bg="#1E1E1E1A" display="flex" justifyContent={"center"} alignItems="center" w="708px" h="142px" gap={"34px"} margin="auto" mt={"21px"}>
                <Box>
                    <Box display={"flex"} justifyContent="center" alignItems={"center"} borderRadius="10px" bg="#FFDE2E" w="35px" padding={"5px"}>
                        <GiFrogPrince color='#FFFFFF' fontSize='23px' />
                    </Box>
                    <Heading fontSize={"20px"} fontWeight="600">Become a Reseller</Heading>
                    <Text fontSize={"16px"} fontWeight="400">200+ Happy Resellers</Text>
                </Box>
                <Box>
                    <Text mb="10px">Plan Includes :</Text>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                        <Text mt="-4px">100 Threads</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Dedicated IP Pool</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Residential Proxy</Text>
                    </Box>
                </Box>
                <Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Dedicated IP Pool</Text>
                    </Box>
                    <Box display={"flex"} gap="8px">
                        <Img textAlign={"center"} w="12.5px" h='8.5px' src='./Images/right.png' alt='right' />
                        <Text mt="-4px">Residential Proxy</Text>
                    </Box>
                </Box>

            </Box>




            <Box mt="180px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center" mb="34px">
                <Heading mb="10px" lineHeight={"43.2px"} fontSize={"36px"}>Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies</Heading>
                <Text w="465px" lineHeight={"21.6px"} fontSize={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>

            <Box display={"flex"} w="1160px" m="auto" gap={"17px"}>
                <Box border={"1px solid #16D11380"} borderRadius="5px" bg="#1E1E1E03" w="386px" h="248px">
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text mt="19.1px" w={"335px"} h="88px">“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt="12px" display={"flex"} gap="10px">
                            <Img w="48px" h="48px" src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={"18px"}>ECHO DZNS</Heading>
                                <Text>Web Designer, CreativeProxies</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box border={"1px solid #16D11380"} borderRadius="5px" bg="#1E1E1E03" w="386px" h="248px">
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text mt="19.1px" w={"335px"} h="88px">“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt="12px" display={"flex"} gap="10px">
                            <Img w="48px" h="48px" src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={"18px"}>John Doe</Heading>
                                <Text>Random Text, ABC</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box border={"1px solid #16D11380"} borderRadius="5px" bg="#1E1E1E03" w="386px" h="248px">
                    <Box p="29px 0 32.1px 25px">
                        <Box display={"flex"}>
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                            <Img w={"23.8px"} h="23.8px" src='./Images/Star.png' alt='star' />
                        </Box>
                        <Text mt="19.1px" w={"335px"} h="88px">“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
                        <Box mt="12px" display={"flex"} gap="10px">
                            <Img w="48px" h="48px" src='./Images/Ellipse 1.png' alt='profile' />
                            <Box fontWeight={"400"}>
                                <Heading fontSize={"18px"}>ECHO DZNS</Heading>
                                <Text>Web Designer, CreativeProxies</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box w="1192px" h="859px" bg="#F6FAFF" borderRadius={"5px"} border="1px solid #1E1E1E1A" m="auto" mb="120px" mt={"250px"}>
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
    );
}

export default Landing;

