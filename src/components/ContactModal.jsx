import { createPortal } from 'react-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from './Form';

export const ContactModal = ({ isShowing, hide }) => {
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
          <DialogContent>
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
