import React from "react";
import ShowSix from "./displays/ShowSix";
import Drop from "./Drop";
import ShowSeven from "./displays/ShowSeven";
import InverseSeven from "./displays/InverseSeven";
import DisplayThree from "./displays/DisplayThree";
import DisplayEight from "./displays/DisplayEight";
import Image from "next/image";

// the main product display for an entire page
// uses blocks and drops

const Display = () => {
  return (
    <div>
      <div className="relative block h-[100px] w-full rounded-md">
        <Image
          src={"/headbanner.avif"}
          alt="headbanner"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <ShowSix />
      <Drop />
      <ShowSeven />
      <Drop />
      <ShowSeven />
      <Drop />
      <ShowSeven />
      <Drop />
      <InverseSeven />
      <Drop />
      <InverseSeven />
      <Drop />
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
