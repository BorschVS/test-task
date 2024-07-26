import { Avatar, Typography } from '@mui/material';

import {
  CardBox,
  FactText,
  GroupBox,
  InfoText,
  TextBox,
} from '../styled/FlightCard.styled';

import S7Airlines from '../images/s7.jpg';

const FlightCard = () => (
  <CardBox>
    <GroupBox>
      <Typography
        fontSize={24}
        fontWeight={(theme) => theme.typography.fontWeightMedium}
        textTransform="uppercase"
        color={(theme) => theme.palette.primary.blue}
      >
        14 000 P
      </Typography>
      <Typography
        display="flex"
        gap={1}
        fontSize={24}
        fontWeight={(theme) => theme.typography.fontWeightBold}
      >
        <Avatar
          component={'span'}
          src={S7Airlines}
          alt="S7 Airlines company logo"
        />
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

export default FlightCard;
