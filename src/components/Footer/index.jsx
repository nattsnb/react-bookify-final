import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SMLinks } from "../SMLinks/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import {StyledFooterLink, StyledFooterLinksContainer, StyledFooterTextContainer} from "./Footer.styled.jsx";

const socialMediaLinks = [
  { id: 0, address: "https://www.facebook.com", icon: "fa fa-facebook" },
  { id: 1, address: "https://www.google.com", icon: "fa fa-instagram" },
  { id: 2, address: "https://www.twitter.com", icon: "fa fa-twitter" },
  { id: 3, address: "https://www.gmail.com", icon: "fa fa-envelope" },
];
export function Footer() {
  return (
    <PageWidthContainer>
        <StyledFooterLinksContainer>
            <StyledFooterLink href={"/"} variant="link">
                <Typography variant="iconLink">contact</Typography>
            </StyledFooterLink>
            <StyledFooterLink href={"/"} variant="iconLink">
                assistance
            </StyledFooterLink>
            <StyledFooterLink href={"/"} variant="iconLink">
                about us
            </StyledFooterLink>
        </StyledFooterLinksContainer>
        <Divider variant="dark"></Divider>
        <StyledFooterTextContainer>
          <div>Feel free to contact us in case of any problems and doubts.</div>
          <div>We are there for you.</div>
        </StyledFooterTextContainer>
        <SMLinks links={socialMediaLinks}></SMLinks>
    </PageWidthContainer>
  );
}
