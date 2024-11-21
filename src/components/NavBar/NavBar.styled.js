import { styled } from "@mui/material";

export const StyledNavBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(30)};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    padding: 0 ${({ theme }) => theme.spacing(12)};
    
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      padding: 0 ${({ theme }) => theme.spacing(6)};
`;

export const StyledNavBarLinksContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 590px;
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(16)};
`;
