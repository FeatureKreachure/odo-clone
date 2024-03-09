import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white px-24 py-5 text-sm">
      <p className="bg-red-700 rounded-md p-2 inline-block mt-5">
        DISCLAIMER: This is a front-end clone of{" "}
        <a href="https://www.onedayonly.co.za/">OneDayOnly.co.za</a> created for
        fun and practice
      </p>
      <div className="py-5">
        <p>Written using Next.js, TypeScript, and TailwindCSS</p>
        <p className="">
          As of right now, it's an almost-complete clone of the homepage without
          any functionality added. I might expand upon it in the future.
        </p>
      </div>
      <div className="flex justify-between">
        <ul>
          <li className="font-bold">About Us</li>
          <li>Our Blog</li>
          <li>About ODO</li>
          <li>Sell with Us</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li className="font-bold">About You</li>
          <li>Track My Order</li>
          <li>My Account</li>
          <li>My Orders</li>
          <li>Log a Return</li>
        </ul>
        <ul>
          <li className="font-bold">The Important Stuff</li>
          <li>Help Centre</li>
          <li>Our Banking Details</li>
          <li>Competitions</li>
          <li>Returns</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li className="font-bold">Deals</li>
          <li>Today's Deals</li>
          <li>Everyday Essentials</li>
          <li>Clearance</li>
          <li>Gift Vouchers</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
