import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';


const Blog = () => {
    return (
        <>
            <Box w={["100%", "100%", "80%"]} h={{ base: "1000px", sm: "1000px", lg: "859px" }} bg="#F6FAFF" borderRadius={"5px"} border="1px solid #1E1E1E1A" m="auto" mb={{ base: "120px", sm: "320px", lg: "120px" }} mt={{ base: "250px", sm: "234.33px", lg: "250px" }} display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"}>
                <Box p="65px 40px 35px 40px" display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center">
                    <Heading mb={{ base: "10px", sm: "14.5px", lg: "10px" }} lineHeight={"43.2px"} fontSize={{ base: "36px", sm: "50.56px", lg: "36px" }}>Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog</Heading>
                    <Text w={{ base: "100%", sm: "100%", lg: "465px" }} lineHeight={{ base: "21.6px", sm: "30.34px", lg: "21.6px" }} opacity={0.5} fontSize={{ base: "18px", sm: "25.28px", lg: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                    <Text fontSize={{ base: "16px", sm: "25.28px", lg: "16px" }} mt="10px" color={"#077BFF"}>Read All Blogs <Icon as={AiOutlineArrowRight} /></Text>
                </Box>


                <Box  textAlign={"center"} display={"grid"} gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={{ base: "19.22px", sm: "19.22px", lg: "25px" }}>
                    <Box pl={["5px", "5px", 0]} w={["43%", "43%", "100%"]} h="auto">
                        <Box w={{ base: "150px", sm: "150px", lg: "354px" }} h={{ base: "100px", sm: "100px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "20.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box w={["43%", "43%", "100%"]} h="auto">
                        <Box w={{ base: "150px", sm: "150px", lg: "354px" }} h={{ base: "100px", sm: "100px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box pl={["5px", "5px", 0]} w={["43%", "43%", "100%"]} h="200px">
                        <Box w={{ base: "150px", sm: "150px", lg: "354px" }} h={{ base: "100px", sm: "100px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box w={["43%", "43%", "100%"]} h="200px">
                        <Box w={{ base: "150px", sm: "150px", lg: "354px" }} h={{ base: "100px", sm: "100px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box display={{ base: "none", sm: "none", lg: "block" }}>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>
                    <Box display={{ base: "none", sm: "none", lg: "block" }}>
                        <Box w={{ base: "354px", sm: "440.39px", lg: "354px" }} h={{ base: "221px", sm: "274.93px", lg: "221px" }} bg="#077BFF1A" border={"1px solid #077BFF80"} borderRadius="5px">
                        </Box>
                        <Heading mt="11px" fontSize={{ base: "20px", sm: "24.88px", lg: "20px" }}>Blog Title appear here</Heading>
                        <Text color={"#111822"} mt="1px" fontSize={{ base: "16px", sm: "19.9px", lg: "16px" }} opacity={0.5}>Category name here</Text>
                    </Box>

                </Box>


            </Box>
        </>
    );
}

export default Blog