import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import "./poppins.css";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/results/" element={<Results />} exact />
          <Route path="/venue/:venueId" element={<Venue />} />
          <Route path="/aboutUs/" element={<p>about us</p>} />
          <Route path="/yourFavourites/" element={<p>your favourites</p>} />
          <Route path="/startHosting/" element={<p>start hosting</p>} />
          <Route path="/login/" element={<p>log in</p>} />
          <Route path="/contact/" element={<p>contact</p>} />
          <Route path="/assistance/" element={<p>assistance</p>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
