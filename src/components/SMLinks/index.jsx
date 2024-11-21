import { Link } from "@mui/material";
import { SMContainer, StyledSMLinks } from "./SMLinks.styled.jsx";
import Typography from "@mui/material/Typography";

export function SMLinks({ links }) {
  return (
    <SMContainer>
      {links.map((link) => {
        const { id, path, Icon } = link;
        return (
          <StyledSMLinks href={path} key={id}>
            <Icon />
          </StyledSMLinks>
        );
      })}
    </SMContainer>
  );
}
