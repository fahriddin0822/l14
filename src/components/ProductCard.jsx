import React from "react";

export default function ProductCard({ product, grid }) {
  console.log(product);

  const { title, image, price, description, category, rating } = product
    ? product
    : { id: "123", title: "Title" };

  return (
    <div
      className={`rounded-md bg-gray-100 w-[320px] p-3 shadow-xl h-[470px]  flex flex-col justify-between max-sm:w-[310px] ${
        grid && "w-[100%]"
      }`}
    >
      <img
        src={image}
        alt={`product: ${title}`}
        className={`object-cover w-full h-[200px] rounded-t-md ${
          grid && "h-[250px]"
        }`}
      />
      <h3 className="text-xl font-semibold my-1">{title}</h3>
      <p className="text-sm description" maxLines={5}>
        {description}
      </p>
      <div className="flex justify-between gap-2 my-1">
        <p>
          Category: <span>{category}</span>
        </p>
        <p>
          rate: <span>{rating?.rate}</span>
        </p>
        <p>
          count: <span>{rating?.count}</span>
        </p>
      </div>
      <div className="flex justify-end mt-1">
        <button className="border rounded-md p-1 bg-gray-200">
          Price: <span> {price} $</span>
        </button>
      </div>
    </div>
  );
}
