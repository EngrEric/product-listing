import { FC } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { ProductInterface } from "./constants";
import { Rating, ToggleButton } from "../common";
import { labels } from "../../utils /contants";

const ProductDetails: FC<{ product: ProductInterface }> = ({ product }) => {
  const navigate = useNavigate();

  const handleOptionsSelection = (value: string) => {};
  const handleTypesSelection = (value: string) => {};

  return (
    <Box data-testid="product-details">
      <Button
        sx={{
          position: "absolute",
          top: 10,
          left: {
            md: 20,
            xs: 3
          }
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBack /> Back
      </Button>
      <Grid container spacing={{ xs: 1, md: 0 }} columns={12}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img width={"100%"} src={product.imgUrl} alt={product.name} />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              color: "black",
              marginTop: {
                xs: 0,
                md: "10%"
              },
              paddingX: {
                xs: "10px",
                md: 0
              }
            }}
          >
            <Typography
              lineHeight={"2.5em"}
              fontWeight={"bold"}
              variant="h4"
              component={"h3"}
            >
              {product.name}
            </Typography>
            <Typography
              marginBottom={"20px"}
              variant="subtitle1"
              component={"p"}
            >
              {product.longDescription}
            </Typography>
            <Typography
              lineHeight={"1em"}
              paddingRight={"10px"}
              variant="h6"
              component={"p"}
            >
              Brand:{" "}
              <Typography
                fontSize={"1em"}
                fontWeight={"bold"}
                variant="body1"
                paddingLeft={"10px"}
                component={"span"}
              >
                {product.brand}
              </Typography>
            </Typography>
            <Stack direction={"row"}>
              <Typography
                lineHeight={"3em"}
                marginRight={"10px"}
                variant="h6"
                component={"p"}
              >
                Rated:
              </Typography>
              <Rating labels={labels} />
            </Stack>
            <Box marginY={"15px"}>
              <Typography fontWeight={"bold"} variant="h6" component={"p"}>
                Options
              </Typography>
              <ToggleButton
                onClick={handleOptionsSelection}
                options={JSON.parse(product.options)}
              />
            </Box>
            <Box>
              <Typography fontWeight={"bold"} variant="h6" component={"p"}>
                Sizes
              </Typography>
              <ToggleButton
                onClick={handleTypesSelection}
                options={JSON.parse(product.sizes)}
              />
            </Box>
            <Box marginY={"15px"}>
              <Typography
                fontWeight={"bold"}
                lineHeight={"2em"}
                variant="h5"
                component={"h3"}
              >
                {product.price}
              </Typography>
              <Typography color={"primary"} variant="body1" component={"span"}>
                Stock Available
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "gray"
                  }
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
