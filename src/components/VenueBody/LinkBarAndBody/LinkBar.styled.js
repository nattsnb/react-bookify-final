import { styled } from "@mui/material";

export const StyledBodyLinkBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.palette.secondary.light};
  max-height: 80px;
  padding: ${({ theme }) => theme.spacing(7)}
    ${({ theme }) => theme.spacing(15)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  & .MuiButton-root {
    text-transform: lowercase;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(7)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(2)};
  }
`;

export const StyledWideBodyClickedContentContainer = styled("div")`
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.palette.secondary.light};
`;
