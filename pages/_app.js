import "../styles/main.scss";
import Navigation from "../components/Layout/navigation/Navigation";
import Footer from "../components/Layout/footer/Footer";
import store from "../app/store";
import { Provider } from "react-redux";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Navigation />
      <main>
        <div id="modal-root" />
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
};
export default MyApp;
