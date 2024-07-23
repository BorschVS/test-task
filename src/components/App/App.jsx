import { Container, Avatar, Box } from "@mui/material";
import TransferFilter from "../TransferFiler/TransferFilter";
import PlaneImg from "../../images/plane.png";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import FlightCard from "../FlightCard/FlightCard";
import { GroupBox, MainBox } from "./App.styled";

const App = () => {
  return (
    <Container maxWidth="md">
      <Avatar
        src={PlaneImg}
        alt="The company logo"
        sx={{ display: "block", margin: "40px auto" }}
      />
      <MainBox>
        <TransferFilter />
        <GroupBox display="flex" flexDirection="column" gap={3}>
          <CategoryFilter />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </GroupBox>
      </MainBox>
    </Container>
  );
};

export default App;
