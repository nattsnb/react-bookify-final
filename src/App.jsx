import { ThemeProvider } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import theme from "./theme";

export function App() {


  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          {/*<Layout>*/}
          {/*    <Routes>*/}
          {/*        <Route path="/results/" element={<Results />} exact />*/}
          {/*        <Route path="/venue/" element={<Venue />} />*/}
          {/*    </Routes>*/}
          {/*</Layout>*/}
      </ThemeProvider>
  )

        }

