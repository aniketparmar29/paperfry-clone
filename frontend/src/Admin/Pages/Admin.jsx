import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductNavbar from "../Components/ProductNavbar";
import Sidebar from "../Components/Sidebar";
import { getProduct } from "../../Redux/Admin/AdminProduct/action";
import "../Style.css";
import ProductTable from "../Components/ProductTable";

const Admin = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AdminProduct.product);

  useEffect(() => {
    if (product.length === 0) {
      dispatch(getProduct());
    }
  }, []);

  return (
    <div>
      <Flex>
        <Sidebar />
        <Box>
          <ProductNavbar />

          <Box id="product">
            {product.length > 0 &&
              product.map((item) => {
                return <ProductTable key={item._id} {...item} />;
              })}
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Admin;
