import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextAppProvider from "./context/AppContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ContextAppProvider>
        <App />
      </ContextAppProvider>
    </Provider>
  </BrowserRouter>
);
