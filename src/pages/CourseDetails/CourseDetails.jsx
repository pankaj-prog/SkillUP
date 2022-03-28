import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./CourseDetails.css";

// dummy data
const course = {
  _id: uuid(),
  title: "How to Raise Over $10M In Crowdfunding",
  subTitle:
    "Startup Survivor & Drone Pioneer, Thomas Agaraté Will Teach You the 'Copy-and-Paste' for Crowdfunding Success a $1 Million Dollar Success",
  description:
    "Customers are buying online more than ever and crowdfunding is at its peak. Don't wait! This detailed course explains startup survivor and drone pioneer, Thomas Agaraté's winning method from A to Z. It actually took him 5 years to learn and discover all the skills shown in this course, so whatever your marketing skills, you’ll get tons of value. You'll learn a tested and proven formula. Thomas' method has been used over and over again, with consistent awesome results. Campaigners who used this method raised 5 to 20x more. So if you wanna be one of them, this is the right place for you. Get simple tools and processes you can follow and execute like a professional.",
  img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Business/crowdfunding.jpg?raw=true",
  originalPrice: "4999",
  discountedPrice: "1899",
  discount: "62",
  createdBy: "Crowdfunding Value Bomb",
  language: ["English"],
  duration: "2h 10m",
  noOfLectures: "23",
  rating: "4.5",
  categoryName: "Business",
};

const CourseDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("loading....");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        if (response.data.product) {
          setProduct(response.data.product);
        } else {
          setMessage("product not found");
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
              <button className="btn btn-solid-primary">Add to Cart</button>{" "}
              <button className="btn btn-outline-primary">
                Add to Wishlist
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="content-width text-center">{message}</div>
    </main>
  );
};

export default CourseDetails;
