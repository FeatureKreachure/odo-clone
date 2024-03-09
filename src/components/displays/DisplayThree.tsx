import React from "react";
import Block from "../Block";
import generateDummyData from "@/dummydata/dummy";

const DisplayThree: React.FC = () => {
  const dummyData = generateDummyData(3); // Displaying a total of 3 blocks

  return (
    <div className="grid grid-cols-3 gap-4">
      {dummyData.map((data) => (
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

export default DisplayThree;
