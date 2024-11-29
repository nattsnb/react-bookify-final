import { Footer } from "../Footer/index.jsx";
import { NavBar } from "../NavBar/index.jsx";

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
