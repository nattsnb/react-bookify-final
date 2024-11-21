import {Link, styled} from "@mui/material";

export const StyledFooterTextContainer = styled("div")`
  margin-top: 70px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 198px;
  max-width: 474px;
  width: 100%;
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
`