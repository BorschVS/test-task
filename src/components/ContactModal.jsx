import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { FlightCard } from 'components';
import { Form } from './Form';

const ContactModal = ({ isShowing, hide }) => {
  const availableFlights = useSelector(
    (state) => state.flights.availableFlights
  );

  const currentFlightId = useSelector((state) => state.modal.flightId);
  const currentFlightData = availableFlights.filter(
    (flight) => flight.id === currentFlightId
  );

  return isShowing
    ? createPortal(
        <Dialog
          open={isShowing}
          onClose={hide}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <IconButton
              aria-label="close"
              onClick={hide}
              style={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{marginTop: 2}}>
            <FlightCard flightData={currentFlightData[0]}/>
            <Form />
          </DialogContent>
          <DialogActions>
            <Button onClick={hide} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>,
        document.body
      )
    : null;
};

export default ContactModal;
