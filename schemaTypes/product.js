import { defineField } from "sanity";

const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
        name: "productName",
        title: "Product Name",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "productDescription",
        title: "Product Description",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "productPrice",
        title: "Product Price",
        type: "number",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "productImage",
        title: "Product Image",
        type: "image",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "productCategory",
        title: "Product Category",
        type: "string",
        validation: (rule) => rule.required(),
        options: {
            list: [
                { title: "Sofas", value: "sofas" },
                { title: "Chairs", value: "chairs" },
                { title: "Tables", value: "tables" },
                { title: "Storage", value: "storage" },
                { title: "Decor", value: "decor" },
                { title: "Beds", value: "beds" },
            
            ],
        },
    }),
    {
        name: "trending",
        title: "Trending",
        type: "boolean",
        description: "Mark this product as trending",
      },
  ],
};

export default product;