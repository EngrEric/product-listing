import { FC, useState, MouseEvent } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import { CustomToggleButtonInterface } from "./constants";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    marginRight: theme.spacing(2),
    height: theme.spacing(4),
    border: 0,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius
    }
  },
  "& .Mui-selected": {
    color: "rgb(210, 63, 87) !important",
    backgroundColor: "rgb(252, 233, 236) !important"
  }
}));

const CustomToggleButton: FC<CustomToggleButtonInterface> = ({
  options,
  onClick,
  disabled
}) => {
  const [value, setValue] = useState(options[0].value);

  const handleAChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment);
    onClick(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      size="small"
      value={value}
      exclusive
      disabled={disabled}
      onChange={handleAChange}
      aria-label="text alignment"
      sx={{ overflowX: "scroll", width: "100%" }}
    >
      {options.map((option, index) => {
        return (
          <ToggleButton
            sx={{ textTransform: "capitalize" }}
            value={option.value}
            key={index}
          >
            <Typography variant="body1" component={"p"}>
              {option.text}
            </Typography>
          </ToggleButton>
        );
      })}
    </StyledToggleButtonGroup>
  );
};

export default CustomToggleButton;
