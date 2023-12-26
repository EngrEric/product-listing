import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "../common";
import { AddShoppingCart } from "@mui/icons-material";
import { labels } from "../../utils /contants";
import { FC, memo } from "react";
import { ProductCardInterface } from "./constants";

/**
 * @description The product card component
 */
const ProductCard: FC<ProductCardInterface> = ({
  imgUrl,
  productName,
  price,
  shortDescription,
  id,
  rating,
  onAddToCart
}) => {
  return (
    <Card data-testid="product-card" sx={{ maxWidth: 345, paddingX: "5px" }}>
      <CardActionArea onClick={() => onAddToCart(id)}>
        <CardMedia
          component="img"
          height="200px"
          image={imgUrl}
          alt={productName}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            title={productName}
            gutterBottom
            variant="h6"
            component="p"
          >
            {productName.substring(0, 15)}
          </Typography>
          <Typography gutterBottom variant="h6" fontWeight={800} component="p">
            {price}
          </Typography>
          <Box justifyContent={"center"} display={"flex"}>
            <Rating ratings={rating} labels={labels} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {shortDescription.substring(0, 50) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => onAddToCart(id)}
          size="small"
          color="primary"
          sx={{ border: "solid gray 1px", py: "5px", px: "10px" }}
        >
          <AddShoppingCart /> Buy now
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
