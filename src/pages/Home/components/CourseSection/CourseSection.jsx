import React from "react";
import { v4 as uuid } from "uuid";

import "./CourseSection.css";
import { CourseCard } from "../../../../components";
import { useNavigate } from "react-router-dom";

const products = [
  {
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
  },
  {
    _id: uuid(),
    title: "Business Analysis: Working with Use Cases",
    subTitle:
      "An introductory course on use case modeling for Business Analysts or those looking to transition into a BA role.",
    description:
      "Use cases are one of the most commonly used techniques for analyzing and modeling systems and business processes.  They are a core component of every Business Analyst's toolbox. This course will give you everything you need to know to get up and running with this powerful methodology of analysis. The course consists of four lectures plus a case study.  It should take no longer than two hours to complete. Students will be able to download a use case template for their own personal or business use.",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Business/business%20analysis.jpg?raw=true",
    originalPrice: "3499",
    discountedPrice: "455",
    discount: "87",
    createdBy: "Don Hussey",
    language: ["English", "French"],
    duration: "2h 5m",
    noOfLectures: "22",
    rating: "4.0",
    categoryName: "Business",
  },
  {
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
  },
  {
    _id: uuid(),
    title: "Entrepreneurship Academy: Strategize & Start A Business",
    subTitle:
      "Complete Bootcamp To Start A Business: Business Strategy, Marketing, Sales, Business Planning, Leadership, Growth",
    description:
      "Business school teaches you how to work for others, but this course will teach you how to work for yourself.You can build your own business, or be hired to build the business of your boss.Investing in a business can 10X your income in just a few years.",
    img: "https://raw.githubusercontent.com/pankaj-prog/Ecom-images/main/Business/entrepreneurship.webp",
    originalPrice: "12800",
    discountedPrice: "4480",
    discount: "65",
    createdBy: "Orlando Rene Chavez",
    language: ["English", "German"],
    duration: "11h 34m",
    noOfLectures: "100",
    rating: "3.5",
    categoryName: "Business",
  },
  {
    _id: uuid(),
    title: "The Complete Introduction To Accounting and Finance",
    subTitle:
      "The Original Course on Accounting & Finance! It's easy once you know the basics. Learn introductory accounting & finance.",
    description:
      "This course teaches entrepreneurs, startups and small businesses all things business accounting and entrepreneurial finance related, A to Z.  Starting with an introduction to accounting concepts, we move into financial reports and how to create them, understand them and analyze them.  Bookkeepers, Accountants, CFO's and Business Owners alike would all benefit from this course. Next, we learn about budgeting and forecasting.  Next we discuss growing your company, how to understand and analyze it using non conventional reports. After growing your company, we talk about raising capital and what is involved and avenues you can take.  One section is devoted to the initial public offering process and the timing, costs and best business practices involved. Last, we discuss exit strategies and how to give your investors and yourself a payoff for your hard work. This course is truly a start to finish of accounting and finance. At over 12 hours long, I wanted to make sure you will feel empowered and educated after taking the course. ",
    img: "https://raw.githubusercontent.com/pankaj-prog/Ecom-images/main/Business/accounting%20and%20finance.jpg",
    originalPrice: "3499",
    discountedPrice: "455",
    discount: "87",
    createdBy: "Chris Benjamin",
    language: ["English", "French", "German", "Italian"],
    duration: "8h 37m",
    noOfLectures: "79",
    rating: "3.8",
    categoryName: "Business",
  },
];

const CourseSection = () => {
  return (
    <>
      <h2 className="text-center gutter-bottom-24 section-heading">
        Most popular courses
      </h2>
      <section className="course-wrapper  gutter-bottom-24 ">
        {/* mapping over products and displaying card for each product */}

        {products.map((product) => (
          <CourseCard key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};

export default CourseSection;
