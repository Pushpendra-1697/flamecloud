import { Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react'


const features = ['./Images/f1.svg', './Images/f2.svg', './Images/f3.svg', './Images/f4.svg', './Images/f5.svg', './Images/f6.svg', './Images/f7.svg', './Images/f8.svg'];

const MiddleSection = ({ featuresData }) => {
    return (
        <>
            <Box mb="177px" fontWeight={"500"} bg="#0566D4">
                <Box mb={["8%", "8%", "2%"]} display={"flex"} alignItems="center" justifyContent={"center"}>
                    <Box pt="115px" textAlign={"center"}>
                        <Text w={{ base: "auto", sm: "auto", lg: "550px" }} mb="10px" color={"#FFFFFF"} fontSize={{ base: "23px", sm: "23px", lg: "36px" }} >Why we are the Best Proxy Providers</Text>
                        <Text w={{ base: "auto", sm: "auto", lg: "465px" }} color={"#FFFFFF"} opacity={0.5} lineHeight={{ base: "27.6px", sm: "27.06px", lg: "21.6px" }} mt="10px" fontSize={{ base: "20.55px", sm: "20.55px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    </Box>
                </Box>

                <Box w="80%" m="auto" pb="8%" display={"grid"} gap={{ base: '16px', sm: "24.49px", lg: "16px" }} gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}>
                    {featuresData && featuresData.map(({ id, feature, lorem }, index) =>
                        <Box p="15px" borderRadius={"5px"} color={"#FFFFFF"} border={"1px solid #FFFFFF1A"} key={id}>
                            <Img w={{ base: "15.88px", sm: "43px", lg: "15.88px" }}
                                h={{ base: "16.87px", sm: "48.26px", lg: "16.87px" }} src={features[index]} alt="people" />
                            <Heading mt="2%" fontWeight={"600"} fontSize={{ base: "18px", sm: "18.61px", lg: "20px" }}>{feature}</Heading>
                            <Text mt="2%" opacity={0.5} lineHeight={{ base: "16.8px", sm: "16.8px", lg: "16.8px" }} fontSize={{ base: "14px", sm: "10px", lg: "14px" }} fontWeight="400">{lorem}</Text>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default MiddleSection