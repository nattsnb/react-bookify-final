import { Footer } from "../Footer/index.jsx";
import { NavBar } from "../NavBar/index.jsx";
import React, { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../../App.jsx";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import { CircularProgress, Snackbar } from "@mui/material";
import { api } from "../../shared/api.js";

export function Layout({ children }) {
  const { isError, setIsError } = useContext(ErrorContext);
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getHead() {
      setIsLoading(true);
      try {
        const headResponse = await api.getHead();
        headResponse.ok && setIsServerRunning(true);
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getHead();
  }, []);

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  return (
    <>
      {isError && (
        <VerticalContainer>
          <Snackbar open={true} message="Error fetching data." />
        </VerticalContainer>
      )}
      <NavBar />
      {isServerRunning ? (
        children
      ) : (
        <VerticalContainer>check connection to server</VerticalContainer>
      )}
      <Footer />
    </>
  );
}
