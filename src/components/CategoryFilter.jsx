import { useDispatch } from 'react-redux';
import {
  RadioBox,
  RadioButton,
  RadioLabel,
  RadioText,
} from '../styled/CategoryFilter.styled';

import { CHEAP_VALUE, FAST_VALUE } from 'constants';
import { setCategoryFilter } from '../redux/modules/flights/actions';

export const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleRadioCheck = (event) => {
    dispatch(setCategoryFilter(event.target.value));
  };

  return (
    <RadioBox component="div">
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
