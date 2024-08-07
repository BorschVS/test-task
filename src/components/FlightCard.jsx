import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import { AvatarImage } from 'components';
import { useModal } from 'hooks/useModal';
import { setCurrentFlight } from '../redux/ducks/modal';

import {
  formatNumber,
  formatTimeRange,
  formatFlightDuration,
  formatTransfersWordEnding,
} from 'utils';

import {
  CardBox,
  FactText,
  GroupBox,
  InfoText,
  TextBox,
} from 'styled/FlightCard.styled';

const FlightCard = ({ flightData }) => {
  const dispatch = useDispatch();

  const { isShowing, toggleModal } = useModal();

  const handleCurrentFlight = () => {
    dispatch(setCurrentFlight(flightData.id));
  };

  const handleModal = () => {
    if (isShowing) return;

    toggleModal();
    handleCurrentFlight();
  };

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

  const outboundFlightDuration = formatFlightDuration(
    outboundSegmentData.date,
    outboundSegmentData.duration
  );

  const returnFlightDuration = formatFlightDuration(
    returnSegmentData.date,
    returnSegmentData.duration
  );

  const outboundFlightTransfers = outboundSegmentData.stops.join(', ');
  const returnFlightTransfers = returnSegmentData.stops.join(', ');

  return (
    <CardBox onClick={handleModal} isShowing={isShowing}>
      <GroupBox>
        <Typography
          fontSize={24}
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.blue}
        >
          {formatNumber(flightData.price)} Р
        </Typography>
        <Typography
          display="flex"
          gap={1}
          fontSize={24}
          fontWeight={(theme) => theme.typography.fontWeightBold}
        >
          <AvatarImage
            component="span"
            imageName="s7.jpg"
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
          <InfoText>
            {formatTransfersWordEnding(outboundSegmentData.stops.length)}
          </InfoText>
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
          <InfoText>
            {formatTransfersWordEnding(returnSegmentData.stops.length)}
          </InfoText>
          <FactText>{returnFlightTransfers}</FactText>
        </TextBox>
      </GroupBox>
    </CardBox>
  );
};

export default FlightCard;
