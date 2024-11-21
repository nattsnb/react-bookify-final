import { Link, styled } from "@mui/material";

export const StyledFooterTextContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(18)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 198px;
  max-width: 550px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
`;

export const StyledFooterLink = styled(Link)`
  color: var(--secondary-main);
`;

export const StyledFooterLinksContainer = styled("div")`
  min-width: 314px;
  max-width: 590px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;
