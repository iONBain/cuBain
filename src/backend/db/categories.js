import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beginner",
    description:
      "Not sure where to begin your quest? See this for a head start.",
  },
  {
    _id: uuid(),
    categoryName: "Intermediate",
    description:
      "If you are competent in the fundamentals and crave a challenge in daily life, go for this category."
  },
  {
    _id: uuid(),
    categoryName: "Advanced",
    description:
  "Fairly certain? Try this category, which is more complex than you would have imagined."
  },
];
