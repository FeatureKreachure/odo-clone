import React from "react";
import Block from "../Block";
import generateDummyData from "@/dummydata/dummy";

const DisplayFour: React.FC = () => {
  const dummyData = generateDummyData(4); // Displaying a total of 4 blocks

  return (
    <div className="grid grid-cols-4 gap-4">
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
  );
};

export default DisplayFour;
