import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import {
  FilterProvider,
  AuthProvider,
  CartProvider,
  WishlistProvider,
  AlertProvider,
} from "../src/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <FilterProvider>
              <AlertProvider>
                <App />
              </AlertProvider>
            </FilterProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
