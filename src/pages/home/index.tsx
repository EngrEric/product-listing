import React from "react";
import { ProductList } from "../../components/products";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GetAllProductsData } from "../../components/products/constants";
import { productsQuery } from "../../services/graphql/product";
import { LoadingSpinner } from "../../components/common";

const Home = () => {
  const { loading, data, error } = useQuery<GetAllProductsData>(
    productsQuery.GET_ALL_PRODUCTS
  );

  if (loading)
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "60vh" }}
      >
        <LoadingSpinner />
      </Stack>
    );
  if (error)
    return (
      <Typography
        color={"error"}
        textAlign={"center"}
        pt="100px"
        variant="h5"
        component={"p"}
      >
        Error: {error.message}
      </Typography>
    );

  return (
    <>
      <Box
        sx={{
          height: "40vh",
          backgroundColor: "honeydew",
          position: "fixed",
          width: "100vw",
          zIndex: -1
        }}
      />
      <Typography
        bgcolor={"#000"}
        position={"fixed"}
        color={"#fff"}
        width={"100%"}
        textAlign={"center"}
        variant="h5"
        zIndex={1}
        component={"h1"}
      >
        FREE DELIVERY ON ALL ORDERS OVER €35
      </Typography>
      <Box p={"100px"}>
        {data ? <ProductList products={data?.products} /> : <></>}
      </Box>
    </>
  );
};

export default Home;
