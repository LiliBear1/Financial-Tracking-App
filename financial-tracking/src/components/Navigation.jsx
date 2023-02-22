import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Box, Text } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="darkblue">
      <Flex justify="space-between" align="center" m="0 auto" py={2}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="gray.200" ml={5} >Am I Rich Yet 💰 </Text>
        </Box>
        <Box mr={5}>
          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" fontSize="lg" fontWeight="medium" color="orange">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/income" fontSize="lg" fontWeight="medium" color="gray.200">Income</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/expenses" fontSize="lg" fontWeight="medium" color="gray.200">Expenses</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/savings" fontSize="lg" fontWeight="medium" color="gray.200">Savings</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/contact" fontSize="lg" fontWeight="medium" color="gray.200">Contact Us</BreadcrumbLink>
            </BreadcrumbItem>
            
          </Breadcrumb>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navigation;
