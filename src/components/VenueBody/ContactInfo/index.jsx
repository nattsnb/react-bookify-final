import React from "react";
import { Divider } from "@mui/material";
import { SMLinks } from "../../SMLinks/index.jsx";
import {
  StyledEntryContainer,
  StyledIconContainer,
  StyledContactDetailsList,
  StyledContactDetailsTextContainer,
  StyledContactInfoTypogrphy,
  StyledSMLinksContainer,
} from "./ContactInfo.styled.js";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

export function ContactInfo({ venueDetails, contactsRef }) {
  let contactDetailsToList = [
    {
      id: 0,
      Icon: PhoneIcon,
      string: venueDetails.contactDetails.phone,
    },
    {
      id: 1,
      Icon: EmailIcon,
      string: venueDetails.contactDetails.email,
    },
  ];

  let socialMediaLinks = [
    { id: 0, path: venueDetails.socialMediaLinks.fb, Icon: FacebookIcon },
    {
      id: 1,
      path: venueDetails.socialMediaLinks.instagram,
      Icon: InstagramIcon,
    },
    { id: 2, path: venueDetails.socialMediaLinks.twitter, Icon: TwitterIcon },
    { id: 3, path: venueDetails.socialMediaLinks.website, Icon: LanguageIcon },
  ];
  return (
    <div ref={contactsRef}>
      <StyledContactInfoTypogrphy>
        Contact this venue
      </StyledContactInfoTypogrphy>
      <Divider variant="dark" />
      <StyledContactDetailsList>
        {contactDetailsToList.map(({ id, Icon, string }) => (
          <StyledEntryContainer key={id}>
            <StyledIconContainer>
              <div>
                <Icon />
              </div>
            </StyledIconContainer>
            <StyledContactDetailsTextContainer>
              {string}
            </StyledContactDetailsTextContainer>
          </StyledEntryContainer>
        ))}
      </StyledContactDetailsList>
      <StyledContactInfoTypogrphy>
        Check out on social media
      </StyledContactInfoTypogrphy>
      <Divider variant="dark" />
      <StyledSMLinksContainer>
        <SMLinks links={socialMediaLinks}></SMLinks>
      </StyledSMLinksContainer>
    </div>
  );
}
