import React from "react";

const NavigationBar = () => {
  return (
    <div className="w-full bg-[#104541] py-6 px-6 flex items-center justify-between top-0 left-0 z-50 border-b-4 border-[#0a332f] shadow-lg">
      {/* Logo/Brand - left side with less bright circle */}
      <div className="bg-white/10 rounded-full p-3">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
          LIFT YOUR MOOD EVERYDAY
        </h1>
      </div>

      {/* Login text - right side with brighter circle */}
      <div className="bg-white/20 rounded-full p-3">
        <p className="text-2xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
          LOG IN
        </p>
      </div>
    </div>
  );
};

export default NavigationBar;
