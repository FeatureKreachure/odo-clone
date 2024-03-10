import React from "react";
import ShowSix from "./displays/ShowSix";
import Drop from "./Drop";
import ShowSeven from "./displays/ShowSeven";
import InverseSeven from "./displays/InverseSeven";
import DisplayThree from "./displays/DisplayThree";
import DisplayEight from "./displays/DisplayEight";
import Image from "next/image";
import generateRandomDropProps from "@/dummydata/drop";
import generateDummyData from "@/dummydata/dummy";

// the main product display for an entire page
// uses blocks and drops

const Display = () => {
  // Drop Data
  const fakeDrop1 = generateRandomDropProps();
  const fakeDrop5 = generateRandomDropProps();
  const fakeDrop4 = generateRandomDropProps();
  const fakeDrop3 = generateRandomDropProps();
  const fakeDrop2 = generateRandomDropProps();
  const fakeDrop6 = generateRandomDropProps();
  
  return (
    <div className="flex flex-col gap-5">
      <div className="relative block h-[200px] w-full rounded-md">
        <Image
          src={"/headbanner.avif"}
          alt="headbanner"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        {/* Image credit: onedayonly.co.za */}
      </div>
      <ShowSix />
      <Drop dummyData={fakeDrop1.dummyData} color={"bg-red-500"} heading={fakeDrop1.heading} />
      <ShowSeven />
      <Drop dummyData={fakeDrop2.dummyData} color={"bg-violet-900"} heading={fakeDrop2.heading} />
      <ShowSeven />
      <Drop dummyData={fakeDrop3.dummyData} color={"bg-black"} heading={fakeDrop3.heading} />
      <ShowSeven />
      <Drop dummyData={fakeDrop4.dummyData} color={"bg-blue-800"} heading={fakeDrop4.heading} />
      <InverseSeven />
      <Drop dummyData={fakeDrop5.dummyData} color={"bg-lime-800"} heading={fakeDrop5.heading} />
      <InverseSeven />
      <Drop dummyData={fakeDrop6.dummyData} color={"bg-indigo-800"} heading={fakeDrop6.heading} />
      <ShowSeven />
      <DisplayThree />
      <DisplayThree />
      <DisplayEight />
      <DisplayThree />
      <DisplayThree />
      <ShowSeven />
      <DisplayEight />
      <DisplayThree />
      <DisplayThree />
    </div>
  );
};

export default Display;
