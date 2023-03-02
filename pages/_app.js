import "../styles/main.scss";
import Navigation from "../components/Layout/navigation/Navigation";
import Footer from "../components/Layout/footer/Footer";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <main>
        <div id="modal-root" />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};
export default MyApp;
