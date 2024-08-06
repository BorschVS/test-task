import styled from 'styled-components';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import theme from '../theme';
import { FormControlLabel } from '@mui/material';

export const GroupBox = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${theme.palette.primary.light};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
`;

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export const UncheckedIcon = styled(CheckBoxOutlineBlankOutlinedIcon)`
  color: ${theme.palette.primary.contrastText};
`;

export const CheckedIcon = styled(CheckBoxOutlinedIcon)`
  color: ${theme.palette.primary.contrastText};
`;
