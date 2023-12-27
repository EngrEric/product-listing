import { useState, FC, memo } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

import { RatingProps } from "./constants";

/**
 * @description This is the component that renders the star rating
 */
const RatingComp: FC<RatingProps> = ({
  ratings = 2,
  precision = 0.5,
  getLabelText,
  labels,
  ...otherMUIRatingProps
}) => {
  const [value, setValue] = useState<number | null>(ratings);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      data-testid="rating-component"
      sx={{
        width: "200px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Rating
        {...otherMUIRatingProps}
        name="rating-feedback"
        value={value}
        precision={precision}
        getLabelText={(v) => {
          if (getLabelText) {
            return getLabelText({ value: v });
          }
          return labels[v];
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default memo(RatingComp);
