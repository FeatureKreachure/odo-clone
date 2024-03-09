import React from "react";
import Block from "../Block";
import generateDummyData from "@/dummydata/dummy";

const DisplayEight = () => {
  const dummyData = generateDummyData(8);

  return (
    <div className="grid grid-cols-4 gap-4">
      {dummyData.map((data) => (
        <Block
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

export default DisplayEight;
