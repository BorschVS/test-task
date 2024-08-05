import { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { CHEAP_VALUE, FAST_VALUE } from '../constants';
import { setCategoryFilter } from '../redux/ducks/flights';

import {
  RadioBox,
  RadioButton,
  RadioLabel,
  RadioText,
} from 'styled/CategoryFilter.styled';
import { AppDispatch } from 'redux/configureStore';

export const CategoryFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRadioCheck = (event: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setCategoryFilter(event.currentTarget.value));
  };
  // <RadioBox component="div">
  return (
    <RadioBox>
      <RadioLabel>
        <RadioButton
          type="radio"
          name="filter"
          value={CHEAP_VALUE}
          onChange={handleRadioCheck}
          defaultChecked
        />
        <RadioText>Самый дешевый</RadioText>
      </RadioLabel>
      <RadioLabel>
        <RadioButton
          type="radio"
          name="filter"
          value={FAST_VALUE}
          onChange={handleRadioCheck}
        />
        <RadioText>Самый быстрый</RadioText>
      </RadioLabel>
    </RadioBox>
  );
};

export default CategoryFilter;
