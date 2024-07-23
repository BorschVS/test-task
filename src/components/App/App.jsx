import { Container, Avatar, Box } from "@mui/material";
import TransferFilter from "../TransferFiler/TransferFilter";
import PlaneImg from "../../images/plane.png";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import FlightCard from "../FlightCard/FlightCard";

const App = () => {
  return (
    <Container maxWidth="md">
      <Avatar
        src={PlaneImg}
        alt="The company logo"
        sx={{ display: "block", margin: "40px auto" }}
      />
      <Box component="div" display="flex" justifyContent="center" gap={4}>
        <TransferFilter />
        <Box display="flex" flexDirection="column" gap={3}>
          <CategoryFilter />
          <FlightCard />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
