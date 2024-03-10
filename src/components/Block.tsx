import React from "react";

export interface BlockProps {
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
    <div className="mx-3 my-3 group">
      {/** div1 */}
      <div className="relative overflow-hidden group shadow-md rounded-md shadow-gray-200">
        <img
          src={imageSrc}
          alt="Square Image"
          className="w-full transition-transform duration-300 ease-in-out rounded-md transform origin-center group-hover:scale-105"
        />

        {/* Grey square overlay */}
        <div className="absolute top-0 right-7 h-14 w-14 bg-gray-500 rounded-b-md group-hover:bg-pink-500 transition-background-color duration-300">
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-xs font-bold -mb-2 mt-1">SAVE</div>
            <div className="text-xl font-bold">{discount}%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex gap-2">
          <p className="price group-hover:text-pink-500 text-2xl text-[#444444]">R{price}</p>
          <p className="knockoff self-end">R{knockoff}</p>
        </div>

        <button className="text-black text-2xl bg-[#D4DCE2] rounded-full p-2 w-8 h-8 flex items-center justify-center transition duration-300 hover:text-white hover:bg-[#272727]">
          <span className="plus-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Block;
