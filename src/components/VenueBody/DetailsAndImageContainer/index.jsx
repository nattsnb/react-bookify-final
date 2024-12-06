import {
  StyledDetailsAndImageContainer,
  StyledDetailsContainer,
  StyledNameAndAddressContainer,
  StyledRatingContainer,
  StyledVenueAddressTypography,
  StyledVenueNameTypography,
  StyledVenueRatingTypography,
  StyledImageContainer,
  StyledReviewsTypography,
  StyledHeartDiv,
  StyledIconContainer,
} from "../Venue.styled.js";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDetailsAndImageContainer } from "./useDetailsAndImageContainer.js";
import { HiddenElement } from "../../../shared/styledComponents/hiddenElement.styled.js";
import { useContext } from "react";
import { PictureContext } from "../index.jsx";

export function DetailsAndImageContainer({ venueDetails }) {
  const { currentPictureNumber, handleClickForward, handleClickBack } =
    useDetailsAndImageContainer(venueDetails.venuesBasicData);
  const cityName = venueDetails.venuesBasicData.location.city;
  const cityNameLowerCase = cityName.toLowerCase();
  const numberOfStars = Math.round(venueDetails.venuesBasicData.rating);
  const stars = new Array(numberOfStars).fill("star");

  const contextDisplayedPictureNumber = useContext(PictureContext)[0];

  return (
    <StyledDetailsAndImageContainer>
      <StyledDetailsContainer>
        <StyledNameAndAddressContainer>
          <StyledVenueNameTypography>
            {venueDetails.venuesBasicData.name}
          </StyledVenueNameTypography>
          <StyledVenueAddressTypography>
            {venueDetails.venuesBasicData.location.postalCode},{" "}
            {cityNameLowerCase}
          </StyledVenueAddressTypography>
        </StyledNameAndAddressContainer>
        <StyledRatingContainer>
          <StyledReviewsTypography>
            {venueDetails.venuesBasicData.reviews} reviews
          </StyledReviewsTypography>
          <StyledVenueRatingTypography>
            {stars.map((star, index) => {
              return <StarIcon key={index} />;
            })}
          </StyledVenueRatingTypography>
        </StyledRatingContainer>
      </StyledDetailsContainer>
      <StyledImageContainer
        backgroundurl={
          venueDetails.venuesBasicData.images[contextDisplayedPictureNumber]
        }
      >
        <StyledHeartDiv>
          <Typography variant="boldOnCard">
            <FavoriteBorderIcon />
          </Typography>
        </StyledHeartDiv>
        <StyledIconContainer>
          <IconButton onClick={handleClickBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleClickForward}>
            <ArrowForwardIosIcon />
          </IconButton>
        </StyledIconContainer>
        <HiddenElement></HiddenElement>
      </StyledImageContainer>
    </StyledDetailsAndImageContainer>
  );
}
