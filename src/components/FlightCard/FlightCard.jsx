import { Avatar, Typography } from "@mui/material";
import {
  CardBox,
  FactText,
  GroupBox,
  InfoText,
  TextBox,
  Title,
} from "./FlightCard.styled";
import S7Airlines from "../../images/s7.jpg";

const FlightCard = () => {
  return (
    <CardBox>
      <GroupBox>
        <Title>14 000 P</Title>
        <Typography
          display="flex"
          gap={1}
          fontSize={24}
          fontWeight={(theme) => theme.typography.fontWeightSemiBold}
        >
          <Avatar src={S7Airlines} alt="S7 Airlines company logo" />
          Airlines
        </Typography>
      </GroupBox>
      <GroupBox>
        <TextBox>
          <InfoText>Mow - HKT</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>21ч 15м</FactText>
        </TextBox>
        <TextBox>
          <InfoText>2 пересадки</InfoText>
          <FactText>HKG, JNB</FactText>
        </TextBox>
      </GroupBox>
      <GroupBox>
        <TextBox>
          <InfoText>Mow - HKT</InfoText>
          <FactText>10:45 - 00:50</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>13ч 30м</FactText>
        </TextBox>
        <TextBox>
          <InfoText>2 пересадки</InfoText>
          <FactText>HKG</FactText>
        </TextBox>
      </GroupBox>
    </CardBox>
  );
};

export default FlightCard;
