import React from "react";

import {
  Home,
  Cart,
  Wishlist,
  Courses,
  SignIn,
  CourseDetails,
  SignUp,
} from "./pages";
import { Footer, Navbar, ScrollToTop, AlertContainer } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:productId" element={<CourseDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ScrollToTop>
      <Footer />
      <AlertContainer />
      <button
        className="btn btn-outline-primary btn-pill btn-lg btn-float"
        title="scroll to top"
        onClick={scrollToTopHandler}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;
