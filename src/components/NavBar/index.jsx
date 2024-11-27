import Typography from "@mui/material/Typography";
import { Link, useMediaQuery, useTheme } from "@mui/material";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledNavBarContainer,
  StyledNavBarLinksContainer,
} from "./NavBar.styled.js";

export function NavBar() {
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <PageWidthContainer>
      <StyledNavBarContainer>
        {isViewportLargerThanMd ? (
          <>
            <div>
              <Link href={"/"}>
                <Typography variant="homeLink">bookify</Typography>
              </Link>
            </div>
            <StyledNavBarLinksContainer>
              <Link href={"/aboutUs/"} variant="link">
                <Typography variant="aboutUsLink">about us</Typography>
              </Link>
              <Link href={"/yourFavourites/"} variant="link">
                your favourites
              </Link>
              <Link href={"/startHosting/"} variant="link">
                start hosting
              </Link>
              <Link
                href={"/login/"}
                sx={{ color: "#67AA92" }}
                variant="boldLink"
              >
                login
              </Link>
            </StyledNavBarLinksContainer>
          </>
        ) : (
          <>
            <div>
              <MenuIcon />
            </div>
            <div>
              <Link href={"/"}>
                <Typography variant="homeLink">bookify</Typography>
              </Link>
            </div>
            <Link href={"/login/"} sx={{ color: "#67AA92" }} variant="boldLink">
              login
            </Link>
          </>
        )}
      </StyledNavBarContainer>
    </PageWidthContainer>
  );
}
