import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/index.jsx";
import { Venue } from "../../components/VenueBody/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";

export function VenueView() {
  const { venueId } = useParams();
  return (
    <PageWidthContainer>
      <Banner />
      <Venue venueId={venueId} />
    </PageWidthContainer>
  );
}
