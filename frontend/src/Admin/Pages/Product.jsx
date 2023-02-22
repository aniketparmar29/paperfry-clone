import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductNavbar from "../Components/ProductNavbar";
import Sidebar from "../Components/Sidebar";

const Product = () => {
  return (
    <div>
      <Flex>
        <Sidebar />
        <Box>
          <ProductNavbar />
        </Box>
      </Flex>
    </div>
  );
};

export default Product;
