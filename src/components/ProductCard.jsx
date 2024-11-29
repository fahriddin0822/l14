import React from "react";

export default function ProductCard({ product, grid }) {
  console.log(product);

  const { title, image, price, description, category, rating } = product
    ? product
    : { id: "123", title: "Title" };

  return (
    <div
      className={`rounded-md bg-gray-100 w-[320px] p-3 shadow-xl h-[500px]  flex flex-col justify-between max-sm:w-[310px] ${
        grid && "w-[100%]"
      }`}
    >
      <img
        src={image}
        alt={`product: ${title}`}
        className={`object-contain w-full h-[200px] rounded-t-md ${
          grid && "h-[280px]"
        }`}
      />
      <h3 className="text-xl font-semibold my-1">{title}</h3>
      <p className="text-sm h-[100px] description" maxLines={5}>
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
      <div className="flex justify-start mt-1">
        <button className="rounded-lg p-1 border border-red-900">
          Price: <span> {price} $</span>
        </button>
      </div>
    </div>
  );
}
