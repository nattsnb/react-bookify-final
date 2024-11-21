import {Footer} from "../Footer/index.jsx";

export function Layout({ children }) {
  return (
    <>
      <p>NAVBAR</p>
      {children}
      <Footer/>
    </>
  );
}
