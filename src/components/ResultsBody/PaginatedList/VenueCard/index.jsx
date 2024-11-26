import Typography from "@mui/material/Typography";
import {
  StyledVenueCardWrapper,
  StyledPictureFrame,
  StyledHeartDiv,
  StyledNameDiv,
  StyledArrowIcon,
  StyledPictureBottomInfoDiv,
  StyledLocalizationDiv,
  StyledUnderCardInfoBox,
  StyledUnderCardInfoBoxHalfContainer,
  StyledUnderCardInfoCategoryDiv,
  StyledPictureFrameTopInfoContainer,
  StyledIconContainer,
} from "./VenueCard.styled.jsx";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function VenueCard({ venue, backgroundurl }) {
  return (
    <StyledVenueCardWrapper>
      <StyledPictureFrame backgroundurl={backgroundurl}>
        <StyledPictureFrameTopInfoContainer>
          <StyledHeartDiv>
            <Typography variant="boldOnCard">
              <FavoriteBorderIcon />
            </Typography>
          </StyledHeartDiv>
          <StyledNameDiv>
            <Typography variant="boldOnCard">{venue.name}</Typography>
          </StyledNameDiv>
        </StyledPictureFrameTopInfoContainer>
        <StyledIconContainer>
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </StyledIconContainer>
        <StyledPictureBottomInfoDiv>
          <div>
            <Typography variant="boldOnCard">666 zł / doba</Typography>
          </div>
          <StyledLocalizationDiv>
            <div>
              <Typography variant="thinOnCard">
                <i className={"fas fa-map-marker-alt"}></i>
              </Typography>
              <Typography variant="cardCityName">
                {venue.location.city}
              </Typography>
            </div>
          </StyledLocalizationDiv>
        </StyledPictureBottomInfoDiv>
      </StyledPictureFrame>
      <StyledUnderCardInfoBox>
        <StyledUnderCardInfoBoxHalfContainer>
          <GradeIcon />
          <StyledUnderCardInfoCategoryDiv>
            rating{" "}
          </StyledUnderCardInfoCategoryDiv>
          <Box>{venue.rating}</Box>
        </StyledUnderCardInfoBoxHalfContainer>
        <StyledUnderCardInfoBoxHalfContainer>
          <PeopleIcon />
          <StyledUnderCardInfoCategoryDiv>
            capacity{" "}
          </StyledUnderCardInfoCategoryDiv>
          <Box>{venue.capacity}</Box>
        </StyledUnderCardInfoBoxHalfContainer>
      </StyledUnderCardInfoBox>
    </StyledVenueCardWrapper>
  );
}
