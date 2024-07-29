import { Avatar, Typography } from '@mui/material';

import {
  CardBox,
  FactText,
  GroupBox,
  InfoText,
  TextBox,
} from '../styled/FlightCard.styled';

import S7Airlines from '../images/s7.jpg';
import { formatTimeRange } from 'utils/formatTimeRange';
import { getFlightDuration } from 'utils/flightDuration';
import { getTransfersWordEnding } from 'utils/wordEnding';

const FlightCard = ({ flightData }) => {
  const outboundSegmentData = flightData.segments[0];
  const returnSegmentData = flightData.segments[1];

  const outboundOrigin = outboundSegmentData.origin;
  const returnOrigin = returnSegmentData.origin;

  const outboundDestination = outboundSegmentData.destination;
  const returnDestination = returnSegmentData.destination;


  const outboundFlightTime = formatTimeRange(
    outboundSegmentData.date,
    outboundSegmentData.duration
  );

  const returnFlightTime = formatTimeRange(
    returnSegmentData.date,
    returnSegmentData.duration
  );

  const outboundFlightDuration = getFlightDuration(
    outboundSegmentData.date,
    outboundSegmentData.duration
  );

  const returnFlightDuration = getFlightDuration(
    returnSegmentData.date,
    returnSegmentData.duration
  );

  const outboundFlightTransfers = outboundSegmentData.stops.join(', ');
  const returnFlightTransfers = returnSegmentData.stops.join(', ');

  return (
    <CardBox>
      <GroupBox>
        <Typography
          fontSize={24}
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.blue}
        >
          {flightData.price} Р
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
          <InfoText>{`${outboundOrigin} - ${outboundDestination}`}</InfoText>
          <FactText>{outboundFlightTime}</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>{outboundFlightDuration}</FactText>
        </TextBox>
        <TextBox>
          <InfoText>{getTransfersWordEnding(outboundSegmentData.stops.length)}</InfoText>
          <FactText>{outboundFlightTransfers}</FactText>
        </TextBox>
      </GroupBox>
      <GroupBox>
        <TextBox>
          <InfoText>{`${returnOrigin} - ${returnDestination}`}</InfoText>
          <FactText>{returnFlightTime}</FactText>
        </TextBox>
        <TextBox>
          <InfoText>в пути</InfoText>
          <FactText>{returnFlightDuration}</FactText>
        </TextBox>
        <TextBox>
          <InfoText>{getTransfersWordEnding(returnSegmentData.stops.length)}</InfoText>
          <FactText>{returnFlightTransfers}</FactText>
        </TextBox>
      </GroupBox>
    </CardBox>
  );
};

export default FlightCard;
