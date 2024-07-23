import styled from "@emotion/styled";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

// <Box component="div" sx={{ p: 2, backgroundColor: "#ffffff", width: 250 }}>

export const GroupBox = styled.div`
  width: 250px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.primary.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UncheckedIcon = styled(CheckBoxOutlineBlankOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.blue};
`;

export const CheckedIcon = styled(CheckBoxOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.blue};
`;
