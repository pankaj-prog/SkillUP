import React from "react";

import { Home, Cart, Wishlist, Courses, SignIn, CourseDetails } from "./pages";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<CourseDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      <button
        class="btn btn-outline-primary btn-pill btn-lg btn-float"
        title="scroll to top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;
