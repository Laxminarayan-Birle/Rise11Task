import React from "react";
import Cards from "./Cards";
const Cardcomponent = () => {
  return (
    <div className="bg-white m-1 lg:m-10 xl:m-10 xl:mt-1 lg:mt-1 rounded-lg">
      <div className="flex p-1 sm:p-3 ml-6 pb-3">
        <p className="font-semibold text-lg">File your Claim. </p>
        <p
          className="text-xs md:text-sm text-slate-400 m-1.5 ml-2"
          style={{ fontWeight: "500" }}
        >
          (Approx 5 Minutes)
        </p>
      </div>
      <div className="flex">
        <hr
          className="text-gray-500 w-[6%] "
          style={{
            border: "2px solid rgb(169 169 169 / 33%)",
          }}
        />
        <hr
          className="text-blue-500 w-[20%]"
          style={{
            border: "2px solid rgb(59 130 246 / var(--tw-text-opacity, 1))",
          }}
        />
        <hr
          className="text-blue-500 w-[74%]"
          style={{
            border: "2px solid rgb(169 169 169 / 33%)",
          }}
        />
      </div>
      <Cards />
    </div>
  );
};

export default Cardcomponent;
