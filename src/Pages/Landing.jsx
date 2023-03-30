import { Alert, AlertIcon, Box, Button, Heading, Img, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopSection from '../Components/TopSection';
import MiddleSection from '../Components/MiddleSection';
import Pricing from '../Components/Pricing';
import Customers from '../Components/Customers';
import Blog from '../Components/Blog';

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
            setError(false);
            setFeaturesData(res.data);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };

    const handleClickToNavigateProxyLocationPage = () => {
        navigate('/proxy');
    };

    return (
        <Box fontFamily={"Figtree"} fontStyle="normal" mt="12%">
            <Box textAlign={"center"} mt="2px">
                {loading && <Spinner size={"lg"} color="red" />}
                {error && <Alert status='error'>
                    <AlertIcon />
                    Something went Wrong!😒
                </Alert>}
            </Box>

            <Text width={{ base: "100%", sm: "100%", lg: "20%" }} m={"auto"} color={"#111822"} opacity={0.5} textAlign="center" mt={{ base: "50%", sm: "50%", lg: "95px" }} fontSize={{ base: "16px", sm: "30px", lg: "16px" }}
            >WELCOME TO CREATIVE PROXIES</Text>

            <Box fontSize={{ base: "56px", sm: "86px", lg: "56px" }} lineHeight={{ base: "67.2px", sm: "103.2px", lg: "67.2px" }} m={{ base: "3px 20px", sm: "4px 20px", lg: "3px 400px" }} w={{ base: "100%", sm: "100%", lg: "824px" }} h={{ base: "auto", sm: "auto", lg: "134px" }}>
                We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service since 2020
            </Box>

            <Box mb={{ base: "5%", sm: "5%", lg: "26px" }} mt={{ base: "5%", sm: "5%", lg: "17px" }} lineHeight={{ base: "26.4px", sm: "48px", lg: "26.4px" }} m="auto" fontSize={{ base: "22px", sm: "40px", lg: "22px" }} w={{ base: "100%", sm: "100%", lg: "509px" }} fontWeight={"500"} h={{ base: "auto", sm: "auto", lg: "52px" }} ml={{ base: "6%", sm: "6%", lg: "40%" }} opacity={0.5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Box>


            <Box ml={{ base: 0, sm: "40%", lg: 0 }} textAlign={"center"} mt="26px"><Button onClick={handleClickToNavigateProxyLocationPage} borderRadius={{ base: "10px", sm: "20.72px", lg: "10px" }} bg="#077BFF" w={{ base: "208px", sm: "460px", lg: "208px" }} h={{ base: "47px", sm: "97.39px", lg: "47px" }} color={"white"} p={{ base: '12px 55px', sm: "36px 115px", lg: "12px 55px" }} fontSize={{ base: "18px", sm: "37.3px", lg: "18px" }} cursor="pointer" variant={"solid"}>Get Started<AiOutlineArrowRight /></Button></Box>


            <Box background="rgba(0, 182, 122, 0.1)"
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
                <Img w={{ base: "200px", md: '200px', lg: "200px" }} src='./Images/Frame7.png' alt="Frame7" />
                <Img w={{ base: "auto", md: '200px', lg: "auto" }} src='./Images/Frame6.png' alt="Frame6" />
            </Box>
            <Box w={{ base: "90%", sm: "90%", lg: "588px" }} m="auto" mt={["14%", "14%","4%"]}><hr /></Box>
            <TopSection />
            
            <MiddleSection featuresData={featuresData} />
            
            <Pricing />
            
            <Customers />
            {/* 
            <Blog /> */}
        </Box>
    );
}

export default Landing;

