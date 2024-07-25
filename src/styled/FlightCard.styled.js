import styled from '@emotion/styled';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.palette.primary.white};

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
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.text.gray};
`;

export const FactText = styled.p`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.text.primary};
`;
