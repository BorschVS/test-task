import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

import {
  setStopsFilter,
  setAllStops,
  setStopsFilterStatus,
} from '../redux/modules/flights/actions';

import {
  CheckedIcon,
  GroupBox,
  UncheckedIcon,
} from '../styled/TransferFilter.styled';

export const TransferFilter = () => {
  const dispatch = useDispatch();
  const stopsFilter = useSelector((state) => state?.flights?.stopsFilter);

  const handleCheckboxChange = useCallback(
    (event) => {
      const value = parseInt(event.target.value);
      const newStopsFilter = stopsFilter.includes(value)
        ? stopsFilter.filter((stop) => stop !== value)
        : [...stopsFilter, value];

      dispatch(setStopsFilter(newStopsFilter));
      dispatch(setStopsFilterStatus());
    },
    [stopsFilter, dispatch]
  );

  const handleAllChange = (event) => {
    if (event.target.checked) {
      dispatch(setAllStops());
    } else {
      dispatch(setStopsFilter());
    }
  };

  return (
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
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              value={'all'}
              checked={stopsFilter.length === 4}
              onChange={handleAllChange}
            />
          }
          label="Все"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              value={0}
              checked={stopsFilter.includes(0)}
              onChange={handleCheckboxChange}
            />
          }
          label="Без пересадок"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              value={1}
              checked={stopsFilter.includes(1)}
              onChange={handleCheckboxChange}
            />
          }
          label="1 пересадка"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              value={2}
              checked={stopsFilter.includes(2)}
              onChange={handleCheckboxChange}
            />
          }
          label="2 пересадки"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              value={3}
              checked={stopsFilter.includes(3)}
              onChange={handleCheckboxChange}
            />
          }
          label="3 пересадки"
        />
      </FormGroup>
    </GroupBox>
  );
};

export default TransferFilter;
