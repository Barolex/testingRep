import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { MainButton } from "./MainButton";

// ENF

export const Header = ({ title, showTask }) => {
  return (
    <Box>
      <Grid container justifyContent={"space-around"}>
        <Grid item>
          <h1>{title}</h1>
        </Grid>
        <Grid item mt={3}>
          <MainButton text="Add" color="success" />
        </Grid>
      </Grid>
    </Box>
  );
};
