import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Box, Text } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="gray.100" borderBottom="1px solid" borderColor="gray.200">
      <Flex justify="space-between" align="center" m="0 auto" py={2}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="green.500" ml={5} >Am I Rich Yet 💰 </Text>
        </Box>
        <Box mr={5}>
          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" fontSize="lg" fontWeight="medium" color="gray.500">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/income" fontSize="lg" fontWeight="medium" color="gray.500">Income</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/expenses" fontSize="lg" fontWeight="medium" color="gray.500">Expenses</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/savings" fontSize="lg" fontWeight="medium" color="gray.500">Savings</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/contact" fontSize="lg" fontWeight="medium" color="gray.500">Contact Us</BreadcrumbLink>
            </BreadcrumbItem>
            
          </Breadcrumb>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navigation;
