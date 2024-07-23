import { Container, Avatar, Box } from "@mui/material";
import TransferFilter from "../TransferFiler/TransferFilter";
import PlaneImg from "../../images/plane.png";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const App = () => {
  return (
    <Container maxWidth="md">
      <Avatar
        src={PlaneImg}
        alt="The company logo"
        sx={{ display: "block", margin: "40px auto" }}
      />
      <Box>
        <TransferFilter />
        <CategoryFilter />
      </Box>
    </Container>
  );
};

export default App;
