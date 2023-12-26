import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingSpinner: FC = () => {
  return (
    <Box data-testid="loading-spinner" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
