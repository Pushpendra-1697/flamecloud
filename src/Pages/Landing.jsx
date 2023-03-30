import { Alert, AlertIcon, Box, Button, Heading, Img, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Landing = () => {
    const [featuresData, setFeaturesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            let res = await axios.get(`https://blog-database-ten.vercel.app/feature`);
            setLoading(false);
            console.log(res);
            setError(false);
            setFeaturesData(res.data);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };

    // console.log(featuresData);

    const handleClickToNavigateProxyLocationPage = () => {
        navigate('/proxy');
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


            <Text width={{ base: "20%", sm: "1200px", lg: "20%" }} m={"auto"} color={"#111822"} opacity={0.5} textAlign="center" mt={{ base: "95px", sm: "100.95px", lg: "95px" }} fontSize={{ base: "16px", sm: "30px", lg: "16px" }}
            >WELCOME TO CREATIVE PROXIES</Text>
            <Box fontSize={{ base: "56px", sm: "86px", lg: "56px" }} lineHeight={{ base: "67.2px", sm: "103.2px", lg: "67.2px" }} m={{ base: "3px 400px", sm: "4px 100px", lg: "3px 400px" }} w={{ base: "824px", sm: "900px", lg: "824px" }} h={{ base: "134px", sm: "309px", lg: "134px" }}>
                We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service since 2020
            </Box>
            <Box mb={{ base: "26px", sm: "50px", lg: "26px" }} mt={{ base: "17px", sm: "26px", lg: "17px" }} lineHeight={{ base: "26.4px", sm: "48px", lg: "26.4px" }} m="auto" fontSize={{ base: "22px", sm: "40px", lg: "22px" }} w={{ base: "509px", sm: "899px", lg: "509px" }} fontWeight={"500"} h={{ base: "52px", sm: "92px", lg: "52px" }} ml={{ base: "40%", sm: "14%", lg: "40%" }} opacity={0.5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Box>
            <Box ml={{ base: 0, sm: "40%", lg: 0 }} textAlign={"center"} mt="26px"><Button onClick={handleClickToNavigateProxyLocationPage} borderRadius={{ base: "10px", sm: "20.72px", lg: "10px" }} bg="blue" w={{ base: "208px", sm: "460px", lg: "208px" }} h={{ base: "47px", sm: "97.39px", lg: "47px" }} color={"white"} p={{ base: '12px 55px', sm: "36px 115px", lg: "12px 55px" }} fontSize={{ base: "18px", sm: "37.3px", lg: "18px" }}>Get Started<AiOutlineArrowRight /></Button></Box>
            <Box mb={{ base: '54px', sm: "72px", lg: "54px" }} background="rgba(0, 182, 122, 0.1)"
                borderRadius="10px"
                textAlign={"center"}
                w={["50%", "50%", "15%"]}
                m="auto"
                mt="20px"
                h={["80px", "80px", "90px"]}
                p="20px"
                display={"flex"}
                flexDir="column"
                alignItems={"center"}>
                <Img w={{base:"200px", md:'200px', lg:"200px"}} src='./Images/Frame7.png' alt="Frame7" />
                <Img w={{base:"auto", md:'200px', lg:"auto"}} src='./Images/Frame6.png' alt="Frame6" />
            </Box>
            <Box w={{ base: "588px", sm: "900px", lg: "588px" }} m="auto"><hr /></Box>


            <Box pl='18px' display={"grid"} gap={{ base: "16.16px", sm: "24.49px", lg: "16.16px" }} gridTemplateColumns={{ base: "repeat(4,1fr)", sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }} width="1200px" m="auto" mt="36.36px" mb="138.36px">
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 25px 26px 35px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "18%"]}
                        h={["25px", "45px", "40px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/square.png' alt="square" />
                    <Text ml={"16px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"25.28px 25px 26px 35px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "18%"]}
                        h={["25px", "45px", "40px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/square.png' alt="square" />
                    <Text ml={"16px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"24.28px 25px 26px 35px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "18%"]}
                        h={["25px", "45px", "40px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/square.png' alt="square" />
                    <Text ml={"16px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #D4EAE8"} padding={"24.28px 25px 26px 35px"} bg="#00B67A1A" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "18%"]}
                        h={["25px", "45px", "40px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/square.png' alt="square" />
                    <Text ml={"16px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
            </Box>



            <Box mb="177px" fontWeight={"500"} bg="#0566D4" w={{ base: "100%", sm: "1220px", lg: "100%" }}>
                <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                    <Box pt="115px">
                        <Text w={{ base: "550px", sm: "884px", lg: "550px" }} mb="10px" color={"#FFFFFF"} fontSize={{ base: "36px", sm: "55.1px", lg: "36px" }} >Why we are the Best Proxy Providers</Text>
                        <Text ml="20px" w={{ base: "465px", sm: "711.73px", lg: "465px" }} color={"#FFFFFF"} opacity={0.5} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} mt="10px" fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    </Box>
                </Box>

                <Box pl="15px" pb="114px" w={{ base: "85%", sm: "100%", lg: "85%" }} m="auto" display={"grid"} gap={{ base: '16px', sm: "24.49px", lg: "16px" }} gridTemplateColumns={{ base: "repeat(4,1fr)", sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}>
                    {featuresData && featuresData.map(({ id, feature, lorem }) =>
                        <Box w={{ base: "286px", sm: "437.76px", lg: "286px" }} h={{ base: "160px", sm: "244.9px", lg: "160px" }} borderRadius={"5px"} color={"#FFFFFF"} mt="30px" padding={"25px"} border={"1px solid #D4EAE8"} key={id} p="22px 25px">
                            <Img w={{ base: "15.88px", sm: "43px", lg: "15.88px" }}
                                h={{ base: "16.87px", sm: "48.26px", lg: "16.87px" }} src='./Images/people.png' alt="people" />
                            <Heading m="9.53px 0 8px 0" fontWeight={"600"} fontSize={{ base: "20px", sm: "30.61px", lg: "20px" }}>{feature}</Heading>
                            <Text opacity={0.5} lineHeight={{ base: "16.8px", sm: "25.71px", lg: "16.8px" }} fontSize={{ base: "14px", sm: "21.43px", lg: "14px" }} fontWeight="400">{lorem}</Text>
                        </Box>
                    )}
                </Box>
            </Box>





            <Box mb={{ base: "79px", sm: "66.69px", lg: "79px" }} display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center" w={{ base: "50%", sm: "1200px", lg: "50%" }} m="auto">
                <Heading mb={{ base: "10px", sm: "18.52px", lg: "10px" }} lineHeight={{ base: "43.2px", sm: "79.99px", lg: "43.2px" }} fontSize={{ base: "36px", sm: "66.66px", lg: "36px" }}>You choose, we <span style={{ color: "#077BFF" }}>Deliver!</span></Heading>
                <Text w={{ base: "465px", sm: "861px", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "39.99px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "33.33px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>

            <Box display={"flex"} flexDirection={{ base: "row", sm: "column", lg: "row" }} justifyContent="center" alignItems={"center"} gap={{ base: "20px", sm: "69.53px", lg: "20px" }} w={{ base: "50%", sm: "1200px", lg: "50%" }} m="auto">
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




                <Box display={{ base: "block", sm: "none", lg: "block" }} borderRadius={"2px"} bg="#16D113" position={'absolute'} left="53%" top={"43.4%"} zIndex={"100px"}><Text p="3px 8px" display={"flex"} justifyContent="center" alignItems={"center"} fontSize="12px" color={"#FFFFFF"}>BEST SELLER</Text></Box>

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






            <Box borderRadius={{ base: "5px", sm: "7.24px", lg: "5px" }} border={"1px solid #1E1E1E1A"} bg="#1E1E1E1A" display="flex" justifyContent={"center"} alignItems="center" w={{ base: "708px", sm: "900px", lg: "708px" }} h={{ base: "142px", sm: "206px", lg: "142px" }} gap={{ base: "34px", sm: "49.24px", lg: "34px" }} margin="auto" mt={{ base: "21px", sm: "49px", lg: "21px" }} ml={{ base: "25.8%", sm: "27%", lg: "25.8%" }}>
                <Box>
                    <Box display={"flex"} justifyContent="center" alignItems={"center"} borderRadius="8px" bg="#FFDE2E" w={{ base: "35px", sm: "57.93px", lg: "35px" }} padding={{ base: "5px", sm: "10px", lg: "7px" }}>
                        <Img src="./Images/Prince.png" alt="Prince" />
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




            <Box mt={{ base: "180px", sm: "201.29px", lg: "180px" }} display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center" mb={{ base: "34px", sm: "100.49px", lg: "34px" }} w={{ base: "40%", sm: "1200px", lg: "40%" }} m={{ base: "auto" }}>
                <Heading mb={{ base: "10px", sm: "16.49px", lg: "10px" }} lineHeight={"43.2px"} fontSize={{ base: '36px', sm: "59.31px", lg: "36px" }}>Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies</Heading>
                <Text w={{ base: '465px', sm: "766.06px", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "35.58px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "29.65px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </Box>



            <Box display={"flex"} w={{ base: "75%", sm: "1200px", lg: "75%" }} m="auto" gap={{ base: "17px", sm: "28.01px", lg: "17px" }} flexDirection={{ base: "row", sm: "column", lg: "row" }} justifyContent="center" alignItems={"center"} >
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



            <Box w="1152px" h={{ base: "859px", sm: "1096px", lg: "859px" }} bg="#F6FAFF" borderRadius={"5px"} border="1px solid #1E1E1E1A" m="auto" mb={{ base: "120px", sm: "320px", lg: "120px" }} mt={{ base: "250px", sm: "234.33px", lg: "250px" }} display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"}>
                <Box p="65px 40px 35px 40px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center">
                    <Heading mb={{ base: "10px", sm: "14.5px", lg: "10px" }} lineHeight={"43.2px"} fontSize={{ base: "36px", sm: "50.56px", lg: "36px" }}>Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog</Heading>
                    <Text w={{ base: "465px", sm: "653.13px", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "30.34px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "25.28px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    <Text fontSize={{ base: "16px", sm: "25.28px", lg: "16px" }} mt="10px" color={"#077BFF"}>Read All Blogs <Icon as={AiOutlineArrowRight} /></Text>
                </Box>


                <Box p="0 40px" display={"grid"} gridTemplateColumns={{ base: "repeat(3,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={{ base: "25px", sm: "19.22px", lg: "25px" }}>
                    <Box>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box display={{ base: "block", sm: "none", lg: "block" }}>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box display={{ base: "block", sm: "none", lg: "block" }}>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
}

export default Landing;

