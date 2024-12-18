import { Footer } from "../Footer/index.jsx";
import { NavBar } from "../NavBar/index.jsx";
import React, { useContext } from "react";
import { ErrorContext } from "../../App.jsx";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import { Snackbar } from "@mui/material";

export function Layout({ children }) {
  const { isError, setIsError } = useContext(ErrorContext);

  return (
    <>
      {isError && (
        <VerticalContainer>
          <Snackbar open={true} message="Error fetching data." />
        </VerticalContainer>
      )}
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
