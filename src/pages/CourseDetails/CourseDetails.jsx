import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "./CourseDetails.css";
import { useCart, useAuth, useWishlist } from "../../context";

const CourseDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("loading....");

  const { encodedToken } = useAuth();
  const { cartProducts, setCartProducts, cartHandlers } = useCart();
  const { wishlistProducts, setWishlistProducts, wishlistHandlers } =
    useWishlist();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        if (response.data.product) {
          setProduct(response.data.product);
        } else {
          setMessage("Product not found 😢");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId, product]);

  if (product) {
    const {
      img,
      title,
      duration,
      noOfLectures,
      subTitle,
      createdBy,
      categoryName,
      rating,
      description,
    } = product;

    const addToCartHandler = () => {
      if (encodedToken) {
        cartHandlers.addToCart(product, encodedToken, setCartProducts);
      } else {
        if (
          confirm("You must login to access cart. Redirect to signin page?")
        ) {
          navigate("/signin");
        }
      }
    };

    const addToWishlistHandler = () => {
      if (encodedToken) {
        wishlistHandlers.addToWishlist(
          product,
          encodedToken,
          setWishlistProducts
        );
      } else {
        if (
          confirm("You must login to access wishlist. Redirect to signin page?")
        ) {
          navigate("/signin");
        }
      }
    };

    const removeFromWishlistHandler = () => {
      wishlistHandlers.removeFromWishlist(
        product,
        encodedToken,
        setWishlistProducts
      );
    };

    return (
      <main className="content-width">
        <h3 className="section-heading gutter-bottom-16 text-center">
          Course Details
        </h3>
        <div className="course-details-wrapper">
          <section>
            <div className="img-wrapper gutter-bottom-8">
              <img className="responsive-img" src={img} alt={title} />
            </div>
            <div className="course-content-details">
              <div className="bubble">
                <span>Content</span>
                <span className="h5">{duration}</span>
              </div>
              <div className="bubble">
                <span>Lectures</span>
                <span className="h5">{noOfLectures}</span>
              </div>
            </div>
          </section>
          <section>
            <h4 className="course-title gutter-bottom-8">{title}</h4>
            <p className="course-subtitle gutter-bottom-8">{subTitle}</p>
            <p className="">
              By <span className="text-link">{createdBy}</span> | in{" "}
              <span className="text-link">{categoryName}</span>
            </p>
            <p className="course-rating gutter-bottom-16">
              Average Rating: <span> {rating}/5 </span>{" "}
            </p>
            <h5>Description</h5>
            <p className="gutter-bottom-16">{description}</p>
            <div className="course-cta-wrapper">
              {cartHandlers.isProductInCart(product, cartProducts) ? (
                <button
                  className="btn btn-solid-primary"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart{" "}
                </button>
              ) : (
                <button
                  className="btn btn-solid-primary"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              )}{" "}
              {wishlistHandlers.isProductInWishlist(
                product,
                wishlistProducts
              ) ? (
                <button
                  className="btn btn-outline-primary"
                  onClick={removeFromWishlistHandler}
                >
                  Remove from Wishlist{" "}
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  onClick={addToWishlistHandler}
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h3 className="content-width text-center">{message}</h3>
    </main>
  );
};

export default CourseDetails;
