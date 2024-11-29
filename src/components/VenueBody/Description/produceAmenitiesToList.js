export function produceAmenitiesToList(venueDetails, venuesAmenities) {
  const activeAmenities = venuesAmenities.amenities
    .filter((obj) =>
      venueDetails.activeFiltersAndOccasions.activeFilters.activeAmenities.includes(
        obj.id,
      ),
    )
    .map((obj) => obj.name);
  const roomAmenities = venuesAmenities.roomAmenities
    .filter((obj) =>
      venueDetails.activeFiltersAndOccasions.activeFilters.activeRoomAmenities.includes(
        obj.id,
      ),
    )
    .map((obj) => obj.name);
  const activeHandicapAccessibility = venuesAmenities.handicapAccessibility
    .filter((obj) =>
      venueDetails.activeFiltersAndOccasions.activeFilters.activeHandicapAccessibility.includes(
        obj.id,
      ),
    )
    .map((obj) => obj.name);
  const activeNeighbourhoods = venuesAmenities.neighbourhoods
    .filter((obj) =>
      venueDetails.activeFiltersAndOccasions.activeFilters.activeNeighbourhoods.includes(
        obj.id,
      ),
    )
    .map((obj) => obj.name);
  const formattedActiveNeighbourhoods = () => {
    const allButLast = activeNeighbourhoods
      .slice(0, -1)
      .map((item) => `${item}`)
      .join(", ");
    const lastItem = `${activeNeighbourhoods[activeNeighbourhoods.length - 1]}`;
    return `${allButLast} and ${lastItem} nearby`;
  };
  const amenitiesToList = activeAmenities.concat(
    roomAmenities,
    activeHandicapAccessibility,
  );
  amenitiesToList.push(formattedActiveNeighbourhoods());
  return amenitiesToList;
}
