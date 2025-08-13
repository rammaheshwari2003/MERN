
import App from "./App";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import "./css/adminStyle.css";

import store from "./store";
import { Provider } from "react-redux";
import LoginContext from "./LoginContext";
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <LoginContext>
          <App />
        </LoginContext>
    </Provider>
);
