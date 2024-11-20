import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { Layout } from "./components/Layout/index.jsx";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/results/" element={<Results />} exact />
          <Route path="/venue/" element={<Venue />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
