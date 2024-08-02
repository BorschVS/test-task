import styled from '@emotion/styled';
import theme from '../theme';

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  margin-bottom: 20px;

  & > label:first-of-type > input {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > label:last-of-type > input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const RadioLabel = styled.label`
  position: relative;

  width: 100%;

  &:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const RadioButton = styled.input`
  appearance: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  margin: 0;
  background-color: ${theme.palette.primary.light};
  color: ${theme.palette.primary.light};

  border: 1px solid ${theme.palette.secondary.dark};
  border-radius: 5px;

  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s,
    color 0.3s;

  font: inherit;
  cursor: pointer;

  &:checked {
    background-color: ${theme.palette.primary.contrastText};
    border-color: ${theme.palette.primary.contrastText};
  }

  &:checked + span {
    color: ${theme.palette.primary.light};
  }
`;

export const RadioText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);

  font-size: 14px;
  font-weight: ${theme.typography.fontWeightRegular};
  white-space: nowrap;
  text-transform: uppercase;
`;
