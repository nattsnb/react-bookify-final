import { Link } from "@mui/material";
import {SMContainer, StyledSMLinks} from "./SMLinks.styled.jsx";

export function SMLinks({ links }) {
  return (
    <SMContainer>
      {links.map((link) => (
        <Link href={link.address} key={link.id}>
          <StyledSMLinks className={link.icon}></StyledSMLinks>
        </Link>
      ))}
    </SMContainer>
  );
}
