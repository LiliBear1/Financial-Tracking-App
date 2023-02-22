import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Box, Text } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="#02136d">
      <Flex justify="space-between" align="center" m="0 auto" py={2}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="#f5f7ff" ml={5}>Am I Rich Yet 💰 </Text>
        </Box>
        <Box>
          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" fontSize="lg" fontWeight="medium" color="#f5881e">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/income" fontSize="lg" fontWeight="medium" color="gray.100">Income</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/expenses" fontSize="lg" fontWeight="medium" color="gray.100">Expenses</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="/savings" fontSize="lg" fontWeight="medium" color="gray.100">Savings</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navigation;
