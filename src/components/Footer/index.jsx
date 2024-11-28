import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { SMLinks } from "../SMLinks/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import {
  StyledFooterContainer,
  StyledFooterLink,
  StyledFooterLinksContainer,
  StyledFooterTextContainer,
} from "./Footer.styled.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";

const socialMediaLinks = [
  { id: 0, path: "https://www.facebook.com", Icon: FacebookIcon },
  { id: 1, path: "https://www.instagram.com", Icon: InstagramIcon },
  { id: 2, path: "https://www.twitter.com", Icon: TwitterIcon },
  { id: 3, path: "https://www.gmail.com", Icon: MailIcon },
];
export function Footer() {
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <StyledFooterContainer>
        <StyledFooterLinksContainer>
          <StyledFooterLink href={"/contact/"} variant="link">
            contact
          </StyledFooterLink>
          <StyledFooterLink href={"/assistance/"} variant="link">
            assistance
          </StyledFooterLink>
          <StyledFooterLink href={"/aboutUs/"} variant="link">
            about us
          </StyledFooterLink>
        </StyledFooterLinksContainer>
        <Divider variant="footer"></Divider>
        <StyledFooterTextContainer>
          {isViewportLargerThanMd ? (
            <>
              <div>
                Feel free to contact us in case of any problems and doubts.
              </div>
              <div>We are there for you.</div>
            </>
          ) : (
            <>
              <div>Feel free to contact us in case of</div>
              <div> any problems and doubts.</div>
              <div>We are there for you.</div>
            </>
          )}
        </StyledFooterTextContainer>
        <SMLinks links={socialMediaLinks}></SMLinks>
      </StyledFooterContainer>
    </div>
  );
}
