import styled from '@emotion/styled';

import theme from '../theme';

interface IsShowing {
  isShowing: boolean;
}

export const CardBox = styled.div<IsShowing>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  background-color: ${theme.palette.primary.light};

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  ${({ isShowing }) =>
    isShowing &&
    `
  box-shadow: none;
  transform: scale(1);
  cursor: default; 
`}

  // here

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    ${({ isShowing }) =>
      isShowing &&
      `
    box-shadow: none;
    transform: scale(1);
  `}

    cursor: pointer;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GroupBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: ${theme.typography.fontWeightRegular};
  text-transform: uppercase;

  color: ${theme.palette.text.disabled};
`;

export const FactText = styled.p`
  font-size: 14px;
  font-weight: ${theme.typography.fontWeightBold};
  text-transform: uppercase;

  color: ${theme.palette.text.primary};
`;
