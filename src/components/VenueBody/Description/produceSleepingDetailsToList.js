import BedIcon from "@mui/icons-material/Bed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export function produceSleepingDetailsToList(venueDetails) {
  const sleepingDetailsToList = [
    {
      id: 0,
      Icon: BedIcon,
      string: `${venueDetails.sleepingDetails.maxCapacity} sleeping places - ${venueDetails.sleepingDetails.amountOfBeds}`,
    },
    {
      id: 2,
      Icon: AccessTimeIcon,
      string: `check-in ${venueDetails.checkInHourPM}:00 / check-out ${venueDetails.checkOutHourAM}:00`,
    },
    {
      id: 3,
      Icon: LocationCityIcon,
      string: `${venueDetails.distanceFromCityCenterInKM} km to the city`,
    },
  ];
  if (venueDetails.sleepingDetails.amountOfBeds === 1) {
    sleepingDetailsToList[0].string = sleepingDetailsToList[0].string + ` bed`;
  } else {
    sleepingDetailsToList[0].string = sleepingDetailsToList[0].string + ` beds`;
  }
  if (venueDetails.sleepingDetails.extraDetails !== "") {
    sleepingDetailsToList[0].string =
      sleepingDetailsToList[0].string +
      ` / ${venueDetails.sleepingDetails.extraDetails}`;
  }
  return sleepingDetailsToList;
}
