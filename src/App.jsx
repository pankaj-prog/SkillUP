import React from "react";

import { Home, Cart, Wishlist, Courses, SignIn } from "./pages";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
