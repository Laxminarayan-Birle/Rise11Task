import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineCircle } from "react-icons/md";

const Progressbar = () => {
  return (
    <div className="flex justify-center overflow-x-auto">
      <div className="flex flex-wrap gap-4 md:gap-6 whitespace-nowrap justify-center">
        {/* Preliminary */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center">
            01
            <p
              className="text-xs md:text-sm text-slate-500 ml-2"
              style={{ fontWeight: "500" }}
            >
              Preliminary
            </p>
          </h1>
          <div className="flex items-center">
            <IoIosCheckmarkCircle className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border: "2px solid rgb(59 130 246 / var(--tw-text-opacity, 1))",
              }}
            />
          </div>
        </div>

        {/* Your Details */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center">
            02
            <p
              className="text-xs md:text-sm text-slate-500 ml-2"
              style={{ fontWeight: "500" }}
            >
              Your Details
            </p>
          </h1>
          <div className="flex items-center">
            <IoIosCheckmarkCircle className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border: "2px solid rgb(59 130 246 / var(--tw-text-opacity, 1))",
              }}
            />
          </div>
        </div>

        {/* KYC */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center">
            03
            <p
              className="text-xs md:text-sm text-slate-500 ml-2"
              style={{ fontWeight: "500" }}
            >
              KYC
            </p>
          </h1>
          <div className="flex items-center">
            <IoIosCheckmarkCircle className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border:
                  "2px dashed rgb(59 130 246 / var(--tw-text-opacity, 1))",
              }}
            />
          </div>
        </div>

        {/* Parties */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center text-slate-400">
            04
            <p
              className="text-xs md:text-sm text-slate-400 ml-2"
              style={{ fontWeight: "500" }}
            >
              Parties
            </p>
          </h1>
          <div className="flex items-center">
            <MdOutlineCircle className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border: "2px solid rgb(59 130 246 / 30%)",
              }}
            />
          </div>
          <p
            className="text-xs md:text-sm text-slate-400"
            style={{ fontWeight: "500" }}
          >
            (Approx 5 Min)
          </p>
        </div>

        {/* Claim */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center text-slate-400">
            05
            <p
              className="text-xs md:text-sm text-slate-400 ml-2"
              style={{ fontWeight: "500" }}
            >
              Claim
            </p>
          </h1>
          <div className="flex items-center">
            <MdOutlineCircle className="text-blue-200 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border: "2px solid rgb(59 130 246 / 30%)",
              }}
            />
          </div>
          <p
            className="text-xs md:text-sm text-slate-400"
            style={{ fontWeight: "500" }}
          >
            (Approx 5 Min)
          </p>
        </div>

        {/* Review */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center text-slate-400">
            06
            <p
              className="text-xs md:text-sm text-slate-400 ml-2"
              style={{ fontWeight: "500" }}
            >
              Review
            </p>
          </h1>
          <div className="flex items-center">
            <MdOutlineCircle className="text-blue-200 w-6 h-6 md:w-8 md:h-8" />
            <hr
              className="text-blue-500 w-20 md:w-32 hidden md:block"
              style={{
                border: "2px solid rgb(59 130 246 / 30%)",
              }}
            />
          </div>
          <p
            className="text-xs md:text-sm text-slate-400"
            style={{ fontWeight: "500" }}
          >
            (Approx 5 Min)
          </p>
        </div>

        {/* Payment */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-black text-sm md:text-lg flex items-center text-slate-400">
            07
            <p
              className="text-xs md:text-sm text-slate-400 ml-2"
              style={{ fontWeight: "500" }}
            >
              Payment
            </p>
          </h1>
          <div className="flex items-center">
            <MdOutlineCircle className="text-blue-200 w-6 h-6 md:w-8 md:h-8" />
          </div>
          <p
            className="text-xs md:text-sm text-slate-400"
            style={{ fontWeight: "500" }}
          >
            (Approx 5 Min)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
