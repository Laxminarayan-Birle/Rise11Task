import React from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoPulse } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { ImFileText2 } from "react-icons/im";
import { MdOutlineBackHand } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sm:w-3/12 lg:w-2/12 xl:3/12 h-10 mt-7">
      <div className="flex justify-start items-center py-8 sm:p-2 mt-2 cursor-pointer">
        <IoSpeedometerOutline className="text-blue-400 w-14 h-7" />
        <p className="hidden font-semibold text-slate-500 sm:block">
          Dashboard
        </p>
      </div>
      <div className="flex justify-start items-center py-8 sm:p-2 mt-2 cursor-pointer">
        <HiOutlineBriefcase className="text-blue-400 w-14 h-7" />
        <p className="hidden sm:block font-semibold text-slate-500">My Cases</p>
      </div>
      <div className="flex justify-start items-center py-8 sm:p-2 mt-2 cursor-pointer">
        <IoPulse className="text-blue-400 w-14 h-7" />
        <p className="hidden sm:block font-semibold text-slate-500">
          Activities
        </p>
      </div>
      <div className="flex justify-start items-center py-8 sm:p-2  mt-2  cursor-pointer">
        <SlCalender className="text-blue-400 w-14 h-7" />
        <p className="hidden sm:block font-semibold text-slate-500">Calender</p>
      </div>
      <div className="flex justify-start items-center py-8 sm:p-2 mt-2  cursor-pointer">
        <ImFileText2 className="text-blue-400 w-14 h-7" />
        <p className="hidden sm:block font-semibold text-slate-500">
          Filescjnsjn
        </p>
      </div>
      <div className="flex justify-start items-center py-8 sm:p-2 mt-2 cursor-pointer">
        <MdOutlineBackHand className="text-blue-400 w-14 h-7" />
        <p className="hidden sm:block font-semibold text-slate-500">
          Open a Dispute
        </p>
      </div>
      <div className="flex justify-start items-center p-6 sm:p-1 m-3 hidden sm:block">
        <img
          src="https://res.cloudinary.com/dsaaqhang/image/upload/v1734027677/Screenshot_2024-12-12_235052_csokpn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
