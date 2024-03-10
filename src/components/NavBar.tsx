"use client";
import Link from "next/link";
import React from "react";
import CountdownTimer from "./CountdownTimer";

const NavBar = () => {
  return (
    <nav className="fixed z-20 w-full top-0">
      <div>
        {/* Top Section */}
        <div className="flex items-center justify-between px-5 bg-[#272727] h-9">
        <div className="w-[10%]"></div>

          {/** div1 - Centered Horizontally */}
          <div className="flex items-center h-9 gap-2 text-[#D4DCE2]">
            <p className="hover:bg-[#0093d0] px-1 h-full flex items-center flex-grow">
              TODAY'S DEALS
            </p>
            <p className="hover:bg-[#0093d0] px-1 h-full flex items-center flex-grow">
              EVERYDAY ESSENTIALS
            </p>
          </div>

          {/** div2 - Appears on the Right */}
          <div className="text-white">
            <Link href={"/"} className="mr-2 hover:text-[#D4DCE2]">
              MY ACCOUNT
            </Link>
            <Link href={"/"} className="hover:text-[#D4DCE2]">
              CART
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between px-5 text-white text-5xl font-bold bg-[#0093d0] h-18">
          {/** div1 appears left */}
          <div className="flex flex-col">
            <h1 className="mb-0 -mt-3">one</h1>
            <h1 className="-mt-4 mb-1">
              day<span className="text-black">only</span>
            </h1>
          </div>

          {/** div2 appears right */}
          <div className="flex items-center mb-1">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
