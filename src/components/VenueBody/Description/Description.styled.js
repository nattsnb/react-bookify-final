import { styled } from "@mui/material";

export const StyledDescriptionContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(14)} ${({ theme }) => theme.spacing(18)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
        padding: 0 ${({ theme }) => theme.spacing(12)};
`;

export const StyledSectionContainer = styled("div")`
  font-size: 20px;
  line-height: 45px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
