import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Holder } from "../src/components/Holder";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Holder>
        <App />
      </Holder>
    </Provider>
  </>
);
