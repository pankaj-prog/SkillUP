import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Business",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Business.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Marketing",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Marketing.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Design",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Design.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Development",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/development.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "IT & Security",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/IT.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
];
