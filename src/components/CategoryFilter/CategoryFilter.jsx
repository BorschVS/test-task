import { useTheme } from "@emotion/react";
import {
  RadioBox,
  RadioButton,
  RadioLabel,
  RadioText,
} from "./CategoryFilter.styled";

const CategoryFilter = () => {
  return (
    <RadioBox component="div">
      <RadioLabel>
        <RadioButton type="radio" name="filter" checked />
        <RadioText>Самый дешевый</RadioText>
      </RadioLabel>
      <RadioLabel>
        <RadioButton type="radio" name="filter" />
        <RadioText>Самый быстрый</RadioText>
      </RadioLabel>
    </RadioBox>
  );
};

export default CategoryFilter;
