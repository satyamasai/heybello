import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import { useToast } from '@chakra-ui/react'
const SingleProduct = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const toast = useToast()
  const { id } = useParams();
  console.log(id, "params");
  const single_product = JSON.parse(localStorage.getItem("single_product"));
  console.log(single_product, "sp");



//   h--------------handle ADDED KART----------------
const handleAdded= (cartproduct)=>{
   cartItems.push(cartproduct)
   localStorage.setItem("cartItems", JSON.stringify(cartItems))

    toast({
        title: 'Product added.',
        description: "We've added your product to the cart.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

}

  return (
    <div className="sindle_product_page">
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={single_product.api_featured_image}
              fit={"cover"}
              align={"center"}
              w={"80%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {single_product.name}
              </Heading>
              <Text
            
                color={'goldenrod'}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${single_product.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {single_product.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    {single_product.tag_list.map((feature) => (
                      <ListItem>{feature}</ListItem>
                    ))}
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Product Type:
                    </Text>{" "}
                    {single_product.product_type}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Product Brand:
                    </Text>{" "}
                    {single_product.brand}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Rating:
                    </Text>{" "}
                    {single_product.rating}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Category:
                    </Text>{" "}
                    {single_product.category}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Available color:
                    </Text>{" "}
                    <Box
                      display={{ md: "flex", base: "flex", sm: "flex" }}
                      m={"auto"}
                    >
                      {single_product.product_colors.map((color) => (
                        <Box
                          m={"3px"}
                          w={"35px"}
                          h={"35px"}
                          borderRadius={"50%"}
                          bg={color.hex_value}
                        ></Box>
                      ))}
                    </Box>
                  </ListItem>
              
                </List>
              </Box>
            </Stack>

            <Button
              onClick={()=>handleAdded(single_product)}
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping  />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default SingleProduct;
