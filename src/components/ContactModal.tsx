import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
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
          data-testid="contact-modal"
          open={isShowing}
          onClose={hide}
          aria-labelledby="form-dialog-title"
        >
          <Paper
            sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
          >
            <DialogTitle id="form-dialog-title">
              <IconButton
                href=""
                aria-label="close"
                onClick={hide}
                style={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ marginTop: 2 }}>
              <FlightCard flightData={currentFlightData[0]} />
              <Form />
            </DialogContent>
          </Paper>
        </Dialog>,
        document.body
      )
    : null;
};

export default ContactModal;
