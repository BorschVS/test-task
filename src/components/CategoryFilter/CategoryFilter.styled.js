import styled from "@emotion/styled";

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-shrink: 0;

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
  background-color: ${({ theme }) => theme.palette.primary.white};
  margin: 0;
  font: inherit;
  color: white;
  width: 250px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.palette.primary.gray};
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, color 0.3s;

  &:checked {
    background-color: ${({ theme }) => theme.palette.primary.blue};
    border-color: ${({ theme }) => theme.palette.primary.blue};
  }

  &:checked + span {
    color: ${({ theme }) => theme.palette.primary.white};
  }
`;

export const RadioText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);

  font-size: 14px;
  white-space: nowrap;
  text-transform: uppercase;
`;
