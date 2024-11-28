import { styled } from "@mui/material";

export const StyledWideBodyLinkBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.palette.secondary.light};
  max-height: 80px;
  padding: ${({ theme }) => theme.spacing(7)}
    ${({ theme }) => theme.spacing(15)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  & .MuiButton-root {
    text-transform: lowercase;
  }
`;

export const StyledWideBodyClickedContentContainer = styled("div")`
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.palette.secondary.light};
`;
