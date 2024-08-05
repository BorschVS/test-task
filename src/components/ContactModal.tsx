import { FC } from 'react';
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

import { FlightCard, Form } from 'components';
import { ModalProps, ReduxState } from 'types/interfaces';

const ContactModal: FC<ModalProps> = ({ isShowing, hide }) => {
  const availableFlights = useSelector(
    (state: ReduxState) => state.flights.availableFlights
  );

  const currentFlightId = useSelector(
    (state: ReduxState) => state.modal.flightId
  );
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
              onClose={hide}
              style={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ marginTop: 2 }}>
            <FlightCard flightData={currentFlightData[0]} />
            <Form />
          </DialogContent>
          <DialogActions>
            <Button onClick={hide} color="primary">
              Отмена
            </Button>
          </DialogActions>
        </Dialog>,
        document.body
      )
    : null;
};

export default ContactModal;
