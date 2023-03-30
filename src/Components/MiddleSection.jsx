import { Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react'


const features = ['./Images/f1.svg', './Images/f2.svg', './Images/f3.svg', './Images/f4.svg', './Images/f5.svg', './Images/f6.svg', './Images/f7.svg', './Images/f8.svg'];

const MiddleSection = ({ featuresData }) => {
    return (
        <>
            <Box mb="177px" fontWeight={"500"} bg="#0566D4" w={{ base: "100%", sm: "1220px", lg: "100%" }}>
                <Box display={"flex"} alignItems="center" justifyContent={"center"}>
                    <Box pt="115px">
                        <Text w={{ base: "550px", sm: "884px", lg: "550px" }} mb="10px" color={"#FFFFFF"} fontSize={{ base: "36px", sm: "55.1px", lg: "36px" }} >Why we are the Best Proxy Providers</Text>
                        <Text ml="20px" w={{ base: "465px", sm: "711.73px", lg: "465px" }} color={"#FFFFFF"} opacity={0.5} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} mt="10px" fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    </Box>
                </Box>

                <Box pl="15px" pb="114px" w={{ base: "85%", sm: "100%", lg: "85%" }} m="auto" display={"grid"} gap={{ base: '16px', sm: "24.49px", lg: "16px" }} gridTemplateColumns={{ base: "repeat(4,1fr)", sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}>
                    {featuresData && featuresData.map(({ id, feature, lorem }, index) =>
                        <Box w={{ base: "286px", sm: "437.76px", lg: "286px" }} h={{ base: "160px", sm: "244.9px", lg: "160px" }} borderRadius={"5px"} color={"#FFFFFF"} mt="30px" padding={"25px"} border={"1px solid #FFFFFF1A"} key={id} p="22px 25px">
                            <Img w={{ base: "15.88px", sm: "43px", lg: "15.88px" }}
                                h={{ base: "16.87px", sm: "48.26px", lg: "16.87px" }} src={features[index]} alt="people" />
                            <Heading m="9.53px 0 8px 0" fontWeight={"600"} fontSize={{ base: "20px", sm: "30.61px", lg: "20px" }}>{feature}</Heading>
                            <Text opacity={0.5} lineHeight={{ base: "16.8px", sm: "25.71px", lg: "16.8px" }} fontSize={{ base: "14px", sm: "21.43px", lg: "14px" }} fontWeight="400">{lorem}</Text>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default MiddleSection