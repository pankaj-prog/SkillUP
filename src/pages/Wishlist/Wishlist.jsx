import React from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";
import CourseWishlistCard from "./CourseWishlistCard";
import { useAuth, useWishlist } from "../../context";

const Wishlist = () => {
  const { encodedToken } = useAuth();
  const { wishlistProducts, setWishlistProducts } = useWishlist();
  console.log("wishlistproducts", wishlistProducts);
  const navigate = useNavigate();

  return (
    <main>
      {encodedToken ? (
        <div className="content-width">
          <h3 className="section-heading gutter-bottom-16 text-center">
            Courses in your wishlist
          </h3>
          <div className="wishlist-items-wrapper gutter-bottom-16">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => (
                <CourseWishlistCard key={product._id} product={product} />
              ))
            ) : (
              <div className="text-center">
                <h3>Your wishlist is currently empty 😢</h3>
                <p>Seems like you don't have wishes here.</p>
                <p className="gutter-bottom-8">Make a wish</p>
                <button
                  className="btn btn-solid-primary"
                  onClick={() => navigate("/courses")}
                >
                  Start shopping
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="signin-message-wrapper content-width">
          {" "}
          <h3>Please login first to access the cart</h3>
          <button
            className="btn btn-solid-primary"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </div>
      )}
    </main>
  );
};

export default Wishlist;
