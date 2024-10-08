import { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { CHEAP_VALUE, FAST_VALUE } from '../constants';

import { setCategoryFilter } from '../redux/ducks/flightsSlice';
import { AppDispatch } from 'redux/configureStore';

import {
  RadioBox,
  RadioButton,
  RadioLabel,
  RadioText,
} from 'styled/CategoryFilter.styled';

export const CategoryFilter: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleRadioCheck = (event: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setCategoryFilter(event.currentTarget.value));
  };

  return (
    <RadioBox data-testid="category-filter">
      <RadioLabel>
        <RadioButton
          data-testid="radio-cheap"
          type="radio"
          name="filter"
          value={CHEAP_VALUE}
          onClick={handleRadioCheck}
          defaultChecked
        />
        <RadioText>Самый дешевый</RadioText>
      </RadioLabel>
      <RadioLabel>
        <RadioButton
          data-testid="radio-fast"
          type="radio"
          name="filter"
          value={FAST_VALUE}
          onClick={handleRadioCheck}
        />
        <RadioText>Самый быстрый</RadioText>
      </RadioLabel>
    </RadioBox>
  );
};

export default CategoryFilter;
