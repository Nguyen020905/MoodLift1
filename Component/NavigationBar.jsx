import React, { useState } from "react"; // 👈 Import useState

const NavigationBar = () => {
  // 1. Initialize the state to control the pop-up visibility
  const [open, setOpen] = useState(false);

  // Helper function to close the pop-up (for clarity)
  const handleClosePopup = () => {
    setOpen(false);
  };
  
  // Helper function to open the pop-up (for clarity)
  const handleOpenPopup = () => {
    setOpen(true);
  };


  return (
<<<<<<< HEAD
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
=======
    <div className="w-full bg-[#104541] py-6 px-4 fixed top-0 left-0 z-50 border-b-4 border-[#0a332f] shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo/Brand - left side with less bright circle */}
        <div className="bg-white/10 rounded-full p-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
            LIFT YOUR MOOD EVERYDAY
          </h1>
        </div>

        {/* Login Button - right side. Now using the defined handler. */}
        <button
          onClick={handleOpenPopup} // 👈 Calls the function to set 'open' to true
          className="bg-[#104541] rounded-full p-3 transition-transform duration-150 hover:scale-105"
        >
          <p className="text-3xl md:text-4xl font-bold text-white tracking-wide font-adlam px-4">
            LOG IN
          </p>
        </button>
>>>>>>> 21a3a8ea0c1677640b81fb495a669185127ae6bd
      </div>

      {/* Pop-up Modal - renders conditionally based on the 'open' state */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-2xl shadow-xl relative">
            <h2 className="text-2xl font-bold mb-4">Login Form</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#104541] text-white rounded-lg hover:bg-[#0d3a36]"
              >
                Log In
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={handleClosePopup} // 👈 Calls the function to set 'open' to false
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-black"
              aria-label="Close Login Pop-up"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;