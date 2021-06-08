import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "theme-ui";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { theme } from "../lib/Theme";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
