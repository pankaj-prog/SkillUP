import React from "react";
import { v4 as uuid } from "uuid";

import "./Wishlist.css";
import CourseWishlistCard from "./CourseWishlistCard";

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

const course2 = {
  _id: uuid(),
  title: "How To Write A Business Plan And A Winning Business Model",
  subTitle:
    "Business plan template & business plan examples: Create a top business model & business plan for your business ideas",
  description:
    "Revolutionary, new way to write a professional business plan that will help you identify the most effective business strategies for your situation. Take this step to start your business, achieve independence, and become your own boss. Latest course update for 2022",
  img: "https://raw.githubusercontent.com/pankaj-prog/Ecom-images/main/Business/business-plan.webp",
  originalPrice: "3200",
  discountedPrice: "455",
  discount: "86",
  createdBy: "ALex Genadinik",
  language: ["English", "French", "German"],
  duration: "6h 49m",
  noOfLectures: "93",
  rating: "4.2",
  categoryName: "Business",
};

const Wishlist = () => {
  return (
    <main>
      <div className="content-width">
        <h3 className="section-heading gutter-bottom-16 text-center">
          Courses in your wishlist
        </h3>
        <div className="wishlist-items-wrapper gutter-bottom-16">
          <CourseWishlistCard product={course} />
          <CourseWishlistCard product={course2} />
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
