import "../styles/main.scss";
import Navigation from "../components/Layout/Navigation";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
