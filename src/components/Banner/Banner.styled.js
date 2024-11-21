import {styled} from "@mui/material";


export const StyledInputContainer = styled("div")`
  width: 220px;
`

export const StyledSearchBarContainer = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`
export const StyledBanner = styled("div")`
  width: 100%;
`

