import {
  StyledDetailsAndImageContainer,
  StyledAddressAndRatingContainer,
} from "./VenueBody.styled.js";
import Typography from "@mui/material/Typography";

export function DetailsAndImageContainer() {
  return (
    <StyledDetailsAndImageContainer>
      <Typography>Name</Typography>
      <StyledAddressAndRatingContainer>
        <div>address</div>
        <div> rating</div>
      </StyledAddressAndRatingContainer>
      <div>IMAGE</div>
    </StyledDetailsAndImageContainer>
  );
}
