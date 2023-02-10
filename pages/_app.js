import "../styles/main.scss";
import Navigation from "../components/Layout/navigation/Navigation";
import Footer from "../components/Layout/footer/Footer";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default MyApp;
