import React from "react";

interface BlockProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  knockoff: number;
  discount: number;
}

const Block = ({
  imageSrc,
  title,
  description,
  price,
  knockoff,
  discount,
}: BlockProps) => {
  return (
    <div className="mx-3 my-3">
      {/** div1 */}
      <div className="relative overflow-hidden group shadow-md rounded-md shadow-gray-200">
        <img
          src={imageSrc}
          alt="Square Image"
          className="w-full transition-transform duration-300 ease-in-out rounded-md transform origin-center group-hover:scale-105"
        />

        {/* Grey square overlay */}
        <div className="absolute top-0 right-2 h-8 w-8 bg-gray-500 rounded-b-md group-hover:bg-pink-500 transition-background-color duration-300">
          <div className="text-white text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div>SAVE</div>
            <div>{discount}%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="price">R{price}</p>
          <p className="knockoff">R{knockoff}</p>
        </div>

        <button className="">Add</button>
      </div>
    </div>
  );
};

export default Block;
