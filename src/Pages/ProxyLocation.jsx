import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const ProxyLocation = () => {
  return (
    <Box fontFamily={"Figtree"} mt="7%">
      <Text
        textAlign={"center"}
        fontWeight="600"
        fontSize={["12px", "14px", "16px"]}
        opacity="0.5"
        fontStyle="normal"
        color="#111822"
      >
        PROXY LOCATION CHECKER
      </Text>
      <Box
        w={["90%", "50%", "50%"]}
        m="auto"
        fontSize={["36px", "40px", "56px"]}
        fontWeight="600"
        lineHeight={["35px", "45px", "56px"]}
      >
        <Text>Check Locations of all your </Text>
        <Text display={"inline"}>Proxies</Text>
        <Text display={"inline"} color="#077BFF">
          Free
        </Text>
        <Text display={"inline"}>of Cost</Text>
      </Box>
      <Box w={["68%", "46%", "36%"]} m="auto" mt="0.8%">
        <Text
          lineHeight={["22px", "26px", "26px"]}
          fontSize={["15px", "18px", "22px"]}
          fontWeight={"500"}
          opacity="0.5"
        >
          To Check location, enter the address or proxies you want to check (1
          IP Per line)
        </Text>
      </Box>

      <Box
        textAlign={"justify"}
        boxSizing="border-box"
        background="rgba(217, 216, 214, 0.25)"
        border="1px solid rgba(0, 0, 0, 0.25)"
        bordeRadius="5px"
        w={["88%", "68%", "48%"]}
        m="auto"
        mt="2%"
        pt="15px"
        pl="15px"
        h="30%"
      >
        <Text>8.8.8.8</Text>
        <Text>1.1.1.1</Text>
        <Text pb="2%">192.168.1.1</Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        w={["88%", "48%", "48%"]}
        m="auto"
        mt="1.5%"
        gap="10px"
      >
        <Text
          bg="#077BFF"
          fontWeight={"600"}
          fontSize="16px"
          color="#FFFFFF"
          p="8px"
          pl="20px"
          pr="20px"
          borderRadius={"5px"}
          lineHeight={"19px"}
        >
          Check Location
        </Text>
        <Text
          opacity={"0.5"}
          fontWeight="400"
          lineHeight={"17px"}
          fontSize="14px"
          flexBasis={["50%", "40%", "33%"]}
        >
          By using our tool, you agree our Terms of Service and Privacy Policy
        </Text>
      </Box>
      <Text
        color={"#077BFF"}
        lineHeight="24px"
        fontWeight={"500"}
        fontSize="20px"
        textAlign={"justify"}
        w={["88%", "68%", "48%"]}
        m="auto"
        mt="1.3%"
        mb="0.5%"
      >
        Your Result
      </Text>

      <Box
        textAlign={"justify"}
        boxSizing="border-box"
        border="1px solid rgba(0, 0, 0, 0.25)"
        bordeRadius="5px"
        w={["88%", "70%", "48%"]}
        m="auto"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr
                background="rgba(0, 0, 0, 0.1)"
              >
                <Th>IP</Th>
                <Th>PROXY</Th>
                <Th>CITY</Th>
                <Th>COUNTRY</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>8.8.8.8</Td>
                <Td>192.168.00</Td>
                <Td>New York</Td>
                <Td>US</Td>
              </Tr>
              <Tr>
                <Td>1.1.1.1</Td>
                <Td>192.168.00</Td>
                <Td>Los Angeles</Td>
                <Td>US</Td>
              </Tr>
              <Tr>
                <Td>198.168.1.1</Td>
                <Td>192.168.00</Td>
                <Td>San Dego</Td>
                <Td>US</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        textAlign={"center"}
        display="flex"
        justifyContent={"space-between"}
        w={["88%", "68%", "38%"]}
        m="auto"
        mt="2%"
      >
        <Text fontWeight={"500"} fontSize="18px" lineHeight={"22px"} mt="1%">
          Check out our IPv6 Compatibility Checker
        </Text>
        <Box
          display={"flex"}
          flexDir="row"
          justifyContent={"center"}
          alignItems="center"
          gap={1}
          pt={["5px", null, null]}
        >
          <Image src={'./Images/RightArrow.png'} alt="" w={["40%", "50%", "100%"]} />
          <Image src={'./Images/View Tool.png'} alt="" w={["20%", "40%", "80%"]} />
        </Box>
      </Box>
    </Box>
  );
}

export default ProxyLocation;