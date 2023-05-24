import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beginner",
    imgLink: "https://drive.google.com/uc?export=view&id=1w0GDEn3l9Otv0BcVn7Lmr0TWr9tL0rM6",
    description:
      "Not sure where to begin your quest? See this for a head start.",
  },
  {
    _id: uuid(),
    categoryName: "Intermediate",
    imgLink: "https://drive.google.com/uc?export=view&id=1YVyD-wPHd07tiDQ-ywkF5J8iu0q_BO9_",
    description:
      "If you are competent in the fundamentals and crave a challenge in daily life, go for this category."
  },
  {
    _id: uuid(),
    categoryName: "Advanced",
    imgLink: "https://drive.google.com/uc?export=view&id=1O4VQcdEQ5CWCUr0qripP1HIZAsiipI7w",
    description:
  "Fairly certain? Try this category, which is more complex than you would have imagined."
  },
];
