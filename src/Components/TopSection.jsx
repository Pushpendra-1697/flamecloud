import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const TopSection = () => {
    return (
        <>
            <Box  display={"grid"} gap={{ base: "16.16px", sm: "24.49px", lg: "16.16px" }} gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }} w={["70%", "70%", "80%"]}  m="auto" mt="36.36px" mb="138.36px">
                <Box border={"1px solid #D4EAE8"} padding={["25.28px 25px 26px 35px", "25.28px 25px 26px 35px", "25.28px 25px 26px 35px"]} bg="#EEFEFD" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "15%"]}
                        h={["25px", "45px", "35px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/square.png' alt="square" />
                    <Text ml={"3px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #CEE5DF"} padding={"25.28px 25px 26px 35px"} bg="#EEFEF0" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "15%"]}
                        h={["25px", "45px", "35px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/lock.svg' alt="square" />
                    <Text ml={"3px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #CEDAC2"} padding={"24.28px 25px 26px 35px"} bg="#EFFAF6" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "15%"]}
                        h={["25px", "45px", "35px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/Dolar.svg' alt="square" />
                    <Text ml={"3px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
                <Box border={"1px solid #C7DEE6"} padding={"24.28px 25px 26px 35px"} bg="#F0F7FF" borderRadius={"10px"} display={"flex"}>
                    <Img w={["25%", "8%", "15%"]}
                        h={["25px", "45px", "35px"]} background="linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"
                        borderRadius="8px" src='./Images/security.svg' alt="square" />
                    <Text ml={"3px"} lineHeight={{ base: "21.6px", sm: "33.06px", lg: "21.6px" }} fontSize={{ base: "18px", sm: "27.55px", lg: "18px" }} width={{ base: "148px", sm: "227px", lg: "148px" }}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Box>
            </Box>
        </>
    );
}

export default TopSection