import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>


    <App />
 
  </BrowserRouter>
 
);
