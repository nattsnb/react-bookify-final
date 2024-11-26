import { Link, styled } from "@mui/material";

export const StyledFooterTextContainer = styled("div")`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  margin-top: ${({ theme }) => theme.spacing(18)};
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
  color: black;
  opacity: 75%;
`;

export const StyledFooterLinksContainer = styled("div")`
  min-width: 314px;
  max-width: 590px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledFooterContainer = styled("div")`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(18)};
  padding-bottom: ${({ theme }) => theme.spacing(13)};
`;
