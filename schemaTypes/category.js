import { defineField } from "sanity";

const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
        name: "categoryName",
        title: "Category Name",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "categoryDescription",
        title: "Category Description",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "categoryImage",
        title: "Category Image",
        type: "image",
        validation: (rule) => rule.required(),
    }),
  ],
};

export default category;