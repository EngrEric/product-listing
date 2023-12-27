import { Grid } from "@mui/material";
import { ProductCard } from "./";
import { useNavigate } from "react-router-dom";
import { ProductInterface } from "./constants";
import { FC } from "react";

/**
 * @description The component that list all the products
 */
const ProductList: FC<{ products: Array<ProductInterface> }> = ({
  products
}) => {
  const navigate = useNavigate();

  return (
    <Grid
      data-testid="product-list"
      container
      spacing={{ md: 4, xs: 3 }}
      columns={{ md: 12, xs: 12, sm: 6 }}
      sx={{ padding: "20px 20px", width: "100%" }}
    >
      {products.map((product, index) => {
        return (
          <Grid key={product.id} item xs={12} sm={2} md={3}>
            <ProductCard
              key={index}
              imgUrl={product.imgUrl}
              price={product.price}
              productName={product.name}
              shortDescription={product.shortDescription}
              id="1"
              rating={product.rating}
              onAddToCart={() => navigate(`/details/${product.id}`)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
