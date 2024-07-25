import {
  RadioBox,
  RadioButton,
  RadioLabel,
  RadioText,
} from '../styled/CategoryFilter.styled';

export const CategoryFilter = () => (
  <RadioBox component="div">
    <RadioLabel>
      <RadioButton type="radio" name="filter" defaultChecked />
      <RadioText>Самый дешевый</RadioText>
    </RadioLabel>
    <RadioLabel>
      <RadioButton type="radio" name="filter" />
      <RadioText>Самый быстрый</RadioText>
    </RadioLabel>
  </RadioBox>
);

export default CategoryFilter;
