import {
  StyledDetailsAndImageContainer,
  StyledAddressAndRatingContainer,
} from "./VenueBody.styled.js";
import Typography from "@mui/material/Typography";

export function DetailsAndImageContainer({ venueDetails }) {
  const cityName = venueDetails.venuesBasicData.location.city;
  const cityNameLowerCase = cityName.toLowerCase();
  const cityNameCapitalised =
    cityNameLowerCase[0].toUpperCase() + cityNameLowerCase.substring(1);
  return (
    <StyledDetailsAndImageContainer>
      <Typography>{venueDetails.venuesBasicData.name}</Typography>
      <StyledAddressAndRatingContainer>
        <div>
          {venueDetails.venuesBasicData.location.postalCode},{" "}
          {cityNameCapitalised}
        </div>
        <div> rating</div>
      </StyledAddressAndRatingContainer>
      <div>IMAGE</div>
    </StyledDetailsAndImageContainer>
  );
}
