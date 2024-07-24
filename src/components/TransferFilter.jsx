import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import {
  CheckedIcon,
  GroupBox,
  UncheckedIcon,
} from "../styled/TransferFilter.styled";

export const TransferFilter = () => (
  <GroupBox>
    <Typography
      variant="h3"
      fontSize={14}
      fontWeight={700}
      textTransform="uppercase"
      color={(theme) => theme.palette.text.primary}
      marginBottom={2}
    >
      Количество пересадок
    </Typography>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
        }
        label="Все"
      />
      <FormControlLabel
        control={
          <Checkbox icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
        }
        label="Без пересадок"
      />
      <FormControlLabel
        control={
          <Checkbox icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
        }
        label="1 пересадка"
      />
      <FormControlLabel
        control={
          <Checkbox icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
        }
        label="2 пересадки"
      />
      <FormControlLabel
        control={
          <Checkbox icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
        }
        label="3 пересадки"
      />
    </FormGroup>
  </GroupBox>
);

export default TransferFilter;
