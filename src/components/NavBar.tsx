import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div>
        {/* Top Section */}
        <div className="flex justify-between p-4 bg-slate-800">
          {/** div1 - Centered Horizontally */}
          <div className="flex gap-4 text-white mx-auto">
            <p>TODAY'S DEALS</p>
            <p>EVERYDAY ESSENTIALS</p>
          </div>

          {/** div2 - Appears on the Right */}
          <div className="flex gap-4 text-white">
            <p className="ml-auto">MY ACCOUNT</p>
            <p>CART</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center p-4 bg-blue-600">
          <div className="flex flex-col">
            <div>
              <p className="text-white">one</p>
              <p className="text-white">
                day<span className="text-black">only</span>
              </p>
            </div>
          </div>

          <div className="text-white">
            <p>Deals Expire In:</p>
            <p>02:04:56</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
