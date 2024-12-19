import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import { Results } from "./pages/ResultsView/index.jsx";
import { VenueView } from "./pages/VenueView/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import "./poppins.css";
import React, { useState } from "react";

export const ErrorContext = React.createContext();
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import pl from "date-fns/locale/pl";

export function App() {
  const [isError, setIsError] = useState(false);

  return (
    <ErrorContext.Provider value={{ isError, setIsError }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/" element={<Results />} exact />
              <Route path="/venue/:venueId" element={<VenueView />} />
              <Route path="/about-us/" element={<p>about us</p>} />
              <Route
                path="/your-favourites/"
                element={<p>your favourites</p>}
              />
              <Route path="/start-hosting/" element={<p>start hosting</p>} />
              <Route path="/login/" element={<p>log in</p>} />
              <Route path="/contact/" element={<p>contact</p>} />
              <Route path="/assistance/" element={<p>assistance</p>} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </LocalizationProvider>
    </ErrorContext.Provider>
  );
}
