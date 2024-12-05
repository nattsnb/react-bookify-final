import Typography from "@mui/material/Typography";
import {
  StyledVenueCardWrapper,
  StyledPictureFrame,
  StyledHeartDiv,
  StyledNameDiv,
  StyledPictureBottomInfoDiv,
  StyledLocalizationDiv,
  StyledUnderCardInfoBox,
  StyledUnderCardInfoBoxHalfContainer,
  StyledUnderCardInfoCategoryDiv,
  StyledPictureFrameTopInfoContainer,
  StyledIconContainer,
} from "./VenueCard.styled.jsx";
import { Box, IconButton, Link } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useVenueCard } from "./useVenueCard.js";
import RoomIcon from "@mui/icons-material/Room";
import { useContext } from "react";
import { Context } from "../../../../App.jsx";
import { usePriceInPLNData } from "../../../../shared/getPrice.js";

export function VenueCard({ venue, priceInPLN }) {
  const { currentPictureNumber, handleClickForward, handleClickBack } =
    useVenueCard(venue);

  const priceInPLNData = usePriceInPLNData(venue.pricePerNightInEURCent);

  return (
    <Link href={`/venue/${venue.id}/`}>
      <StyledVenueCardWrapper>
        <StyledPictureFrame backgroundurl={venue.images[currentPictureNumber]}>
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
            <IconButton onClick={handleClickBack}>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={handleClickForward}>
              <ArrowForwardIosIcon />
            </IconButton>
          </StyledIconContainer>
          <StyledPictureBottomInfoDiv>
            <div>
              <Typography variant="boldOnCard">
                {priceInPLNData.priceInPLN} zł / doba
              </Typography>
            </div>
            <StyledLocalizationDiv>
              <Typography variant="thinOnCard">
                <RoomIcon />
              </Typography>
              <Typography variant="cardCityName">
                {venue.location.city}
              </Typography>
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
    </Link>
  );
}
