import { SyntheticEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

import {
  setAllStops,
  setStopsFilter,
  setStopsFilterStatus,
} from '../redux/ducks/flights';

import { ReduxState } from 'types/interfaces';
import { AppDispatch } from 'redux/configureStore';

import {
  CheckedIcon,
  GroupBox,
  UncheckedIcon,
} from 'styled/TransferFilter.styled';

export const TransferFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stopsFilter = useSelector(
    (state: ReduxState) => state?.flights?.stopsFilter
  );

  const handleCheckboxChange = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      const filterValue = Number(event.currentTarget.value);
      const currentStopsFilter = stopsFilter.includes(filterValue)
        ? stopsFilter.filter((stop: number) => stop !== filterValue)
        : [...stopsFilter, filterValue];

      dispatch(setStopsFilter(currentStopsFilter));
      dispatch(setStopsFilterStatus());
    },
    [stopsFilter, dispatch]
  );

  const handleAllChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      dispatch(setAllStops());
    } else {
      dispatch(setStopsFilter([]));
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
