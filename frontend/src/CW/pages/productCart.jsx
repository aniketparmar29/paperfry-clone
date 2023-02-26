import {
  Box,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  Image,
  Flex,
  Button,
  Text,
  Input,
  useToast, 
  HStack,
  Grid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItems, reqInstance, updateCart} from "../../Redux/CartReducer/action";
const ProductCart = () => {
  const [qty, setQty] = useState(1)
  const {cart} = useSelector(val=>val.CartReducer)
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);
  const [samt, setsAmt] = useState(0);
  const [applied, setApplied] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const toast = useToast();
  const [cartItems, setCartitems] = useState([])
  
  useEffect(()=>{
   dispatch(getCartItems())
  },[dispatch])


  useEffect(()=>{
  if(cart){
    setCartitems(cart)
  }
  },[cart])
  const removeProduct = (id) => {
   let updatedCart = cart.filter(el=>{
      if(el!==id){
        return el
      }
      }
      )
    dispatch(updateCart({cart:updatedCart}))
   };
  let handleInc = (el => {
    setQty(val=>val+1)
  })

  let handleDec = async (el) => {

    setQty(val=>val>1?val=val-1:val=1)
  };

  const handlecoup = () => {
    if (value === "masai") {
      setApplied(true);
      return toast({
        title: "YAY!",
        description: "30% off has been applied on your total amount!",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Error",
        description: "Sorry Inavalid Coupon",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const removecoup = () => {
    setApplied(false);
    return toast({
      title: "Coupon dismissed",
      description: "Discount has been discarded",
      status: "warning",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p="40px" mt="20px">
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        gap="40px"
        justifyContent="center"
        alignItems="flex-start">
        <Box w={["100%", "100%", "100%", "100%", "60%"]}>
          <Table>
            <Thead
              boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
              bgColor={"white"}>
              <Tr fontSize={"xs"} fontWeight="bold">
                <Td>ITEM</Td>
                <Td>TITLE</Td>
                <Td>PRICE</Td>
                <Td>QUANTITY</Td>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.length>0?
                cartItems?.map((ele) => {
                  return (
                    <Tr
                      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                      key={ele.id}>
                      <Td fontSize={"xs"} fontWeight="bold" w="15%" p="5px">
                        <Image src={ele.images[0]} w="100%" />
                      </Td>
                      <Td
                        fontSize={"xs"}
                        fontWeight="bold"
                        w="40%"
                        style={{ border: "0px solid black", padding: "20px" }}>
                        <Box
                          display={"flex"}
                          flexDirection="column"
                          justifyContent={"space-between"}>
                          <Box mb="20px">
                            <Text>{ele.title}</Text>
                          </Box>
                        </Box>
                      </Td>
                      <Td
                        pt="22px"
                        valign="top"
                        fontSize={"xs"}
                        fontWeight="bold">
                        <Box
                          display={"flex"}
                          flexDirection="column"
                          justifyContent={"flex-start"}>
                          <Text>₹{ele.price_offer}.00</Text>
                          <Text color={"gray"} textDecoration={"line-through"}>
                            ₹{ele.mrp}.00
                          </Text>
                        </Box>
                      </Td>
                      <Td
                        pt="22px"
                        valign="top"
                        fontSize={"xs"}
                        fontWeight="bold">
                        <Box
                          display="flex"
                          justifyContent={"space-evenly"}
                          border="1px solid black">
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleDec(ele)
                            }>
                            -
                          </span>
                          <Text display="inline" px="2px">
                            {qty}
                          </Text>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleInc(ele)
                            }>
                            +
                          </span>
                        </Box>

                        <Flex gap="2px" p="2px">
                          <Box
                            color={"white"}
                            bgColor="#004d3d"
                            onClick={() => removeProduct(ele.id)}
                            w={{ lg: "100%", md: "100%", sm: "100%" }}
                            size="xs"
                            mt={{ lg: "70px" }}
                            padding="19px"
                            fontSize="20px">
                            Remove
                          </Box>
                        </Flex>
                      </Td>
                    </Tr>
                  );
                }):""}
            </Tbody>
          </Table>
        </Box>

        <Box w={["100%", "100%", "100%", "100%", "30%"]}>
          <Box m="auto" display={"flex"} flexDirection="column">
            <Box
              p="20px"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              gap="20px"
              display={"flex"}
              flexDirection="column"
              w="100%">
              <Box display="flex" flexDirection={"column"} gap="20px">
                <Box
                  fontSize={"14px"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}>
                  <Box>
                    <Text fontWeight={"bold"}>Subtotal</Text>
                    <Text fontWeight={"bold"}>Discount</Text>
                    <Text
                      fontWeight={"bold"}
                      display={applied === true ? "block" : "none"}>
                      Coupon Discount
                    </Text>
                    <Text fontWeight={"bold"}>Shipping Charges</Text>
                  </Box>
                  <Box>
                    <Text>&nbsp;&nbsp;₹{samt}.00 </Text>
                    <Text>- ₹{samt - amt}.00 </Text>
                    <Text display={applied === true ? "block" : "none"}>
                      &nbsp;- ₹{(amt * 0.3).toFixed(2)}{" "}
                    </Text>
                    <Text>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹0.00{" "}
                    </Text>
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent="space-between">
                  <Text fontWeight={"bold"}>Total Price</Text>
                  <Text fontWeight={"bold"}>
                    ₹
                    {applied === true ? (amt * 0.7).toFixed(2) : amt.toFixed(2)}
                  </Text>
                </Box>
              </Box>

              <Button
                bgColor="#004d3d"
                color="white"
                onClick={() => {
                  navigate("/payment");
                }}>
                Checkout
              </Button>
              {/* <Button bgColor={"rgb(255,255,255)"}>
                <Image
                  src={}
                  height="100%"></Image>
              </Button> */}
            </Box>
            <Box
              p="30px"
              mt="40px"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
              <Text fontStyle={"italic"} fontWeight="bold">
                Have A coupon code?
              </Text>
              <Input
                display={applied === false ? "inline" : "none"}
                w="100%"
                value={value}
                onChange={(e) => setValue(e.target.value)}></Input>
              <Button
                bgColor="#004d3d"
                color="white"
                w="100%"
                mt="10px"
                onClick={!applied ? handlecoup : removecoup}>
                {applied ? "Remove Coupon" : "Apply"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box border="1px solid gray" marginTop="30px"></Box>

      <Grid
        m={"auto"}
        w="95%"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        p={"20px 0px"}>
        <Box
          pt={"10px"}
          mb={"20px"}
          fontSize={{ base: "16px", sm: "15px", md: "16px", lg: "18px" }}>
          <Text
            fontSize={{ base: "17px", sm: "17px", md: "17px", lg: "18px" }}
            textAlign="left"
            fontWeight={"bold"}>
            Accepted Payment Methods
          </Text>
          <HStack m={"5px 0"}>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/Regalia-HDFC.png.webp"
              style={{ width: "10%", height: "100%" }}></Image>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/simplysave-credit-card.jpg.webp"
              style={{
                width: "10%",
                height: "100%",
                marginLeft: "10px",
              }}></Image>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/ICICI-Coral-Contactless-Card.jpg.webp"
              style={{
                width: "10%",
                height: "100%",
                marginLeft: "10px",
              }}></Image>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/222.png.webp"
              style={{
                width: "10%",
                height: "100%",
                marginLeft: "10px",
              }}></Image>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/Citi-Cash-Back-Credit-Card.jpg.webp"
              style={{
                width: "10%",
                height: "100%",
                marginLeft: "10px",
              }}></Image>
            <Image
              src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/YES-Prosperity-Rewards-Plus.jpg.webp"
              style={{
                width: "10%",
                height: "100%",
                marginLeft: "10px",
              }}></Image>
          </HStack>

          <Text textAlign="left">
            Need help? Call 1.888.282.6060 or chat with us
          </Text>
          <Text textAlign="left">Shipping internationally?</Text>
        </Box>

        <Box>
          <Image
            src="https://storage.needpix.com/rsynced_images/discount-2789863_1280.png"
            style={{ height: "100%" }}
            w={{ sm: "70%", lg: "50%" }}
            ml={{ sm: "-50px", lg: "150px" }}></Image>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductCart;
