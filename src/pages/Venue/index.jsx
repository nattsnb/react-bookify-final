import { useParams } from "react-router-dom";

export function Venue() {
  const { venueId } = useParams();
  return <p>VENUE {venueId} PLACEHOLDER</p>;
}
