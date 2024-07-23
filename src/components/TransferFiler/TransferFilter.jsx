import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { CheckedIcon, GroupBox, UncheckedIcon } from "./TransferFilter.styled";

const TransferFilter = () => {
  return (
    <GroupBox
      component="div"
      sx={{ p: 2, backgroundColor: "#ffffff", width: 250 }}
    >
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
};

export default TransferFilter;
