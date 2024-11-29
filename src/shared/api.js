const getAllVenues = () => {
  return fetch(`http://localhost:3000/venues/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getVenueDetails = (venueId) => {
  return fetch(`http://localhost:3000/venuesDetails/${venueId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venue details:", error));
};

const getVenuesOnPage = (page, limit) => {
  return fetch(
    `http://localhost:3000/venues?_page=${page}&_per_page=${limit}`,
    {
      method: "GET",
    },
  )
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

function getCurrencyResults() {
  return fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
}

const getVenuesAmenities = () => {
  return fetch(`http://localhost:3000/venuesAmenities/`, {
    method: "GET",
  }).then((res) => res.json());
  console
    .log(res)
    .catch((error) => console.error("Error fetching venues:", error));
};

export const api = {
  getAllVenues,
  getVenueDetails,
  getVenuesOnPage,
  getCurrencyResults,
  getVenuesAmenities,
};
