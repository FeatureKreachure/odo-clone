"use client";
import React, { useState } from "react";
import Block, { BlockProps } from "./Block";

export interface DropProps {
  dummyData: BlockProps[];
  color: string;
}

const Drop = ({ dummyData, color }: DropProps) => {
  const [showAllBlocks, setShowAllBlocks] = useState(false);
  console.log(color);

  const handleShowMore = () => {
    setShowAllBlocks(true);
  };

  const handleShowLess = () => {
    setShowAllBlocks(false);
  };

  return (
    <div className="rounded-lg bg-[#f2f2f2]">
      {/* Header */}
      <div className={`p-4 rounded-t-lg ${color}`}>
        <h1 className="text-white text-2xl font-bold">Drop-down Header</h1>
      </div>

      {/* Fixed-height container */}
      <div
        className={`relative overflow-hidden ${
          showAllBlocks ? "" : "h-[500px]"
        } rounded-lg`}
      >
        {/* Blocks */}
        <div className="grid grid-cols-4 gap-4 overflow-hidden">
          {dummyData.map((data) => (
            <Block
              key={data.key}
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              price={data.price}
              knockoff={data.knockoff}
              discount={data.discount}
            />
          ))}
        </div>

        {/* Show More/Show Less Buttons */}
        <div className="absolute bottom-0 left-0 right-0 text-center">
          {!showAllBlocks && (
            // fade div
            <div className="flex items-end justify-center h-[100px] relative">
              <div className="bg-gradient-to-b from-transparent via-opacity-100 to-white absolute inset-0"></div>
              <button
                className={`bottom-5 ${color} text-white px-4 py-2 rounded-lg relative z-10`}
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
      {showAllBlocks && (
        <div className="text-center">
          <button
            className={`text-white px-4 py-2 rounded-lg ${color}`}
            onClick={handleShowLess}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Drop;
