import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[#E1FFF0] flex flex-col items-center justify-center p-4">
      {/* Hình ảnh ở góc trái */}
      <img
        src="./src/assets/Body.png" // thay đường dẫn hình ảnh của bạn
        className="absolute left-4 w-180 h-180 object-contain"
      />

      <img
        src="./src/assets/Body (1).png" // thay đường dẫn hình ảnh của bạn
        className="absolute right-4 w-140 h-140 object-contain"
      />

      <img
        src="./src/assets/Body (2).png" // thay đường dẫn hình ảnh của bạn
        className="absolute top-4 w-110 h-110 object-contain"
      />

      <img
        src="./src/assets/Body (3).png" // thay đường dẫn hình ảnh của bạn
        className="absolute bottom-4 w-110 h-110 object-contain"
      />

      <main className="text-center">
        <h1 className="text-center text-6xl md:text-8xl font-bold">MOODLIFT</h1>
      </main>
    </div>
  );
};

export default Hero;
