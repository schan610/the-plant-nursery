import "../styles/main.scss";
import Navigation from "../components/Layout/navigation/Navigation";
import Footer from "../components/Layout/footer/Footer";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <main>
          <div id="modal-root" />
          <Component {...pageProps} />
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  );
};
export default MyApp;
