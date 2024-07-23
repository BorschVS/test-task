import { Avatar, Box, Typography } from "@mui/material";
import {
  CardBox,
  FactText,
  InfoText,
  TextBox,
  Title,
} from "./FlightCard.styled";
import S7Airline from "../../images/s7.jpg";

const FlightCard = () => {
  return (
    <CardBox>
      {/* row 1 */}
      <Box display="flex" justifyContent="space-between">
        <Title>14 000 P</Title>
        <Typography
          display="flex"
          gap={1}
          fontSize={24}
          fontWeight={(theme) => theme.typography.fontWeightSemiBold}
        >
          <Avatar src={S7Airline} alt="The company logo" />
          Airlines
        </Typography>
      </Box>
      {/* row 2 */}
      <Box display="flex" justifyContent="space-between">
        <TextBox>
          <InfoText>Mow - HKT</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>2 пересадки</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
      </Box>
      {/* row 3 */}
      <Box display="flex" justifyContent="space-between">
        <TextBox>
          <InfoText>Mow - HKT</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>2 пересадки</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
      </Box>
    </CardBox>
  );
};

export default FlightCard;
