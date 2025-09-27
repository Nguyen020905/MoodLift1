import React from "react";

const NavigationBar = () => {
  return (
    <div className="w-full bg-[#104541] py-6 px-4 fixed top-0 left-0 z-50 border-b-4 border-[#0a332f] shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand - left side with less bright circle */}
        <div className="bg-white/10 rounded-full p-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
            LIFT YOUR MOOD EVERYDAY
          </h1>
        </div>

        {/* Login text - right side with brighter circle */}
        <div className="bg-white/20 rounded-full p-3">
          <p className="text-3xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
            LOG IN
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
