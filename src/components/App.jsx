import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Container, Avatar, Grid } from "@mui/material";

import TransferFilter from "./TransferFilter";
import CategoryFilter from "./CategoryFilter";
import FlightCard from "./FlightCard";

import PlaneImg from "../images/plane.png";

const App = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={mobile ? "sm" : "md"}>
      <Avatar
        src={PlaneImg}
        alt="The company logo"
        sx={{ display: "block", margin: "40px auto", width: 60, height: 60 }}
      />
      <Grid
        container
        spacing={mobile ? 2 : 4}
        direction={`${(mobile && "column") || (tablet && "row")}`}
        justifyContent={"center"}
      >
        <Grid item xs={4} md={5} justifyContent={"center"}>
          <TransferFilter />
        </Grid>
        <Grid item xs={7}>
          <CategoryFilter />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
