import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import ThemeProviderComponent from "./components/themeProviderComponent.jsx";

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </Provider>
  </PersistGate>
);
