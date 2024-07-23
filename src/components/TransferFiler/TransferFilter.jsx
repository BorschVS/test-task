import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
const TransferFilter = () => {
  return (
    <Box component="div" sx={{ p: 2, backgroundColor: "#ffffff", width: 250 }}>
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
            <Checkbox
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxOutlinedIcon />}
            />
          }
          label="Все"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxOutlinedIcon />}
            />
          }
          label="Без пересадок"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxOutlinedIcon />}
            />
          }
          label="1 пересадка"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxOutlinedIcon />}
            />
          }
          label="2 пересадки"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxOutlinedIcon />}
            />
          }
          label="3 пересадки"
        />
      </FormGroup>
    </Box>
  );
};

export default TransferFilter;
