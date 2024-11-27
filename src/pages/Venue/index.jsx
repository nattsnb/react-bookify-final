import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/index.jsx";
import { VenueBody } from "../../components/VenueBody/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";

export function Venue() {
  const { venueId } = useParams();
  return (
    <PageWidthContainer>
      <Banner />
      <VenueBody venueId={venueId} />
    </PageWidthContainer>
  );
}
