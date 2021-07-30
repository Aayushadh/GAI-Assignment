import React from "react";

const Banner = () => {
  return (
    <div className="px-3 md:w-2/3 mb-10 md:mb-0">
      <h1 className="text-6xl md:text-8xl font-bold mb-5 leading-tight">
        Stay <br className="hidden md:block" />
        updated.
      </h1>
      <h3 className="text-gray-600 mb-7 leading-tight">
        Subscribe now and receive the latest updates.
      </h3>
      <div>
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
      </div>
    </div>
  );
};

export default Banner;
