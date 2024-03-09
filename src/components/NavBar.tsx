import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div>
        {/* Top Section */}
        <div className="flex justify-between px-3 bg-[#272727]">
          <h1 className="font-bold text-[#272727]">somethingelse</h1>

          {/** div1 - Centered Horizontally */}
          <div className="flex gap-2 text-[#D4DCE2]">
            <p className="hover:bg-[#0093d0]">TODAY'S DEALS</p>
            <p className="hover:bg-[#0093d0]">EVERYDAY ESSENTIALS</p>
          </div>

          {/** div2 - Appears on the Right */}
          <div className="text-white">
            <Link href={"/register"} className="mr-2">
              MY ACCOUNT
            </Link>
            <Link href={"/cart"} className="">
              CART
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between px-3 text-white text-3xl font-bold bg-[#0093d0]">
          {/** div1 appears left */}
          <div>
            <p className="mb-0.5">one</p>
            <p className="mb-0.5">
              day<span className="text-black">only</span>
            </p>
          </div>

          {/** div2 appears right */}
          <div className="mb-1">
            <p>Deals Expire In:</p>
            <p>02:04:56</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
