import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Stack, Typography } from "@mui/material";

import { ProductDetails } from "../../components/products";
import { GetOneProductsData } from "../../components/products/constants";
import { LoadingSpinner } from "../../components/common";
import { productsQuery } from "../../services/graphql/product";

/**
 * @description The product details page
 */
const ProductDetailsPage: FC = () => {
  const { id: productId } = useParams<string>();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery<GetOneProductsData>(
    productsQuery.GET_ONE_PRODUCT,
    {
      skip: !productId,
      variables: { id: productId }
    }
  );

  if (loading) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "60vh" }}
      >
        <LoadingSpinner /> Loading...
      </Stack>
    );
  }
  if (error)
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "60vh" }}
      >
        <Typography
          color={"error"}
          textAlign={"center"}
          pt="100px"
          variant="h5"
          component={"p"}
        >
          Error: {error.message}
        </Typography>
        <Button sx={{ my: 10 }} onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Stack>
    );

  return data ? <ProductDetails product={data.product} /> : <></>;
};

export default ProductDetailsPage;
