import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faBars,
  faBolt,
  faBookOpen,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faTags,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faShoppingCart);
library.add(faTimes);
library.add(faBolt);
library.add(faBookOpen);
library.add(faTags);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faArrowLeft);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
