import React from "react";
import Block from "../Block";
import generateDummyData from "@/dummydata/dummy";

const DisplayTwo: React.FC = () => {
  const dummyData = generateDummyData(2);

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Top Row */}
      {dummyData.slice(0, 2).map((data) => (
        <Block
          key={data.id}
          imageSrc={data.imageSrc}
          title={data.title}
          description={data.description}
          price={data.price}
          knockoff={data.knockoff}
          discount={data.discount}
        />
      ))}
    </div>
  );
};

export default DisplayTwo;
