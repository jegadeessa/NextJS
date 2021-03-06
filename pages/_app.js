import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "../node_modules/aos";
import "../node_modules/aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
