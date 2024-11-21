import {styled} from "@mui/material";


export const StyledInputContainer = styled("div")`
  max-width: 220px;
  min-width: 120px;
  background-color: aqua;

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`

export const StyledSearchBarContainer = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const StyledBanner = styled("div")`
  width: 100%;
`

