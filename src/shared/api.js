const OPENCAGE_API_KEY = "938e7cda5d2c45f986a8c74c468eaaa7";
const API_URL = import.meta.env.VITE_API_URL;

console.log('API URL:', API_URL);

const getAllVenues = () => {
  return fetch(`${API_URL}/venues/`, {
    method: "GET",
    mode: 'no-cors',
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getVenueDetails = (venueId) => {
  return fetch(`${API_URL}/venuesDetails/${venueId}`, {
    method: "GET",
    mode: 'no-cors',
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venue details:", error));
};

const getVenuesOnPage = (page, limit) => {
  return fetch(`${API_URL}/venues?_page=${page}&_per_page=${limit}`, {
    method: "GET",
    mode: 'no-cors',
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

function getCurrencyResults() {
  return fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {
    mode: 'no-cors',
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
}

const getVenuesAmenities = () => {
  return fetch(`${API_URL}/venuesAmenities/`, {
    method: "GET",
    mode: 'no-cors',
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getCoordinatesData = async (address) => {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${OPENCAGE_API_KEY}`, {
        mode: 'no-cors',
      }
  )
    .then((res) => res.json())
    .catch((error) => console.error("Error geocoding:", error));
};

const getHead = () => {
  return fetch(`${API_URL}`, {
    method: "HEAD",
    mode: 'no-cors',
  }).catch((error) => console.error("Server is not running:", error));
};

export const api = {
  getAllVenues,
  getVenueDetails,
  getVenuesOnPage,
  getCurrencyResults,
  getVenuesAmenities,
  getCoordinatesData,
  getHead,
};
