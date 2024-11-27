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
} from "./VenueBody.styled.js";
import StarIcon from "@mui/icons-material/Star";

export function DetailsAndImageContainer({ venueDetails }) {
  const cityName = venueDetails.venuesBasicData.location.city;
  const cityNameLowerCase = cityName.toLowerCase();
  const numberOfStars = Math.round(venueDetails.venuesBasicData.rating);
  const stars = new Array(numberOfStars).fill("star");
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

      <StyledImageContainer>IMAGE</StyledImageContainer>
    </StyledDetailsAndImageContainer>
  );
}
