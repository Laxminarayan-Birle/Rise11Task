import React, { useRef, useState } from "react";
import { SlCalculator } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { TbMessageLanguage } from "react-icons/tb";
import { RiFilePaper2Line } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { ImFilesEmpty } from "react-icons/im";
import { BsPlusCircle } from "react-icons/bs";
const Cards = () => {
  const fileInputRef = useRef(null);
  const [selectedfile, setselectedfile] = useState("");
  const [display, setdisplay] = useState(false);
  // Function to trigger file input click
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mt-10 pb-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card One */}
        <div className="w-2/6 flex items-start">
          <div className="flex items-center mb-4">
            <SlCalculator className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500">Claim Value</p>
            <label
              htmlFor="contractvalue"
              className="font-medium text-sm text-gray-500 mb-1 mt-3"
            >
              Contract Value
            </label>
            <div className="flex">
              <input
                type="number"
                id="contractvalue"
                className="h-8 rounded-md border-2 px-2 focus:border-blue-500 focus:outline-none"
                style={{
                  WebkitAppearance: "none", // Chrome, Safari, Edge
                  MozAppearance: "textfield", // For Firefox (optional if cross-browser is needed)
                  backgroundColor: "rgb(181 194 255 / 29%)",
                }}
              />
              <div className="flex flex-col">
                <select
                  id="currency"
                  className="h-8 text-[13px] text-gray-700 px-2 rounded-md focus:border-blue-500 focus:outline-none"
                >
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                  <option value="jpy">JPY</option>
                </select>
              </div>
            </div>
            <label
              htmlFor="claimvalue"
              className="font-medium text-sm text-gray-500 mb-1 mt-3"
            >
              Claim Value
            </label>
            <div className="flex flex-col items-start">
              <div className="flex ">
                <input
                  type="number"
                  id="claimvalue"
                  className="h-8 rounded-md border-2 bg-gray-100 px-2 focus:border-blue-500 focus:outline-none"
                  style={{
                    WebkitAppearance: "none", // Chrome, Safari, Edge
                    MozAppearance: "textfield",
                    backgroundColor: "rgb(181 194 255 / 29%)", // For Firefox (optional if cross-browser is needed)
                  }}
                />
                <div className="flex flex-col">
                  <select
                    id="currency-2"
                    className="h-8 text-[13px] text-gray-700 px-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="jpy">JPY</option>
                  </select>
                </div>
              </div>
              <p className="text-xs text-yellow-400 font-semibold">
                150% of Contract Value
              </p>
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>
        {/* card 2 */}
        <div className="w-2/6 flex items-start">
          <div className="flex items-center mb-4">
            <SlLocationPin className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500">Place</p>

            <div className="flex flex-col place-content-start">
              <input
                type="text"
                id="contractvalue"
                placeholder="Select the Place for proceedings"
                className="h-8 rounded-md border-2 placeholder:text-xs w-60 mt-3 px-2 focus:border-blue-500 focus:outline-none"
                style={{
                  WebkitAppearance: "none", // Chrome, Safari, Edge
                  MozAppearance: "textfield", // For Firefox (optional if cross-browser is needed)
                  backgroundColor: "rgb(181 194 255 / 29%)",
                }}
              />
              <p className="font-medium text-xs text-gray-400 mb-1 mt-3 text-left">
                Is the place for the proceedings the one mentioned in the
                agreement?
              </p>

              {/* Yes Radio Button */}
              <div className="flex items-center mb-2 space-x-3">
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name="langAgreement"
                    value="yes"
                  />
                  <label htmlFor="yes" className="text-xs ml-2 text-gray-400">
                    Yes
                  </label>
                </div>
                <div>
                  {/* No Radio Button */}
                  <input type="radio" id="no" name="langAgreement" value="no" />
                  <label htmlFor="no" className="text-xs ml-2 text-gray-400">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>
        {/* card 3  */}
        <div className="w-2/6 flex items-start">
          <div className="flex items-center mb-4">
            <TbMessageLanguage className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500">Language</p>

            <div className="flex flex-col place-content-start">
              <input
                type="text"
                id="contractvalue"
                placeholder="Select the language for proceedings"
                className="h-8 rounded-md border-2 placeholder:text-xs w-60 mt-3 px-2 focus:border-blue-500 focus:outline-none"
                style={{
                  WebkitAppearance: "none", // Chrome, Safari, Edge
                  MozAppearance: "textfield", // For Firefox (optional if cross-browser is needed)
                  backgroundColor: "rgb(181 194 255 / 29%)",
                }}
              />
              <p className="font-medium text-xs text-gray-400 mb-1 mt-3 text-left">
                Is the language for the proceedings the one mentioned in the
                agreement?
              </p>

              {/* Yes Radio Button */}
              <div className="flex items-center mb-2 space-x-3">
                <div>
                  <input
                    type="radio"
                    id="yes1"
                    name="placeAgreement"
                    value="yes"
                  />
                  <label htmlFor="yes1" className="text-xs ml-2 text-gray-400">
                    Yes
                  </label>
                </div>
                <div>
                  {/* No Radio Button */}
                  <input
                    type="radio"
                    id="no1"
                    name="placeAgreement"
                    value="no"
                  />
                  <label htmlFor="no1" className="text-xs ml-2 text-gray-400">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>

        {/* card 4 */}
        <div className="w-2/6 flex items-start mb-7">
          <div className="flex items-center mb-4">
            <RiFilePaper2Line className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500">Statement</p>
            <div
              className="flex flex-col items-center justify-center w-64 p-10 mt-5 rounded-md"
              style={{ backgroundColor: "rgb(181 194 255 / 29%)" }}
            >
              <input
                type="text"
                placeholder="Write your statement here "
                className="placeholder:text-xs text-slate-400 p-2 w-full rounded-md"
                style={{
                  backgroundColor: "transparent", // Match the background color of the div
                  border: "1px solid rgb(181 194 255 / 29%)", // Optional: Matches the border of the div
                }}
              />
              <p className="text-xs text-gray-500">or</p>
              <div
                className="flex items-center cursor-pointer "
                onClick={handleClick}
              >
                <IoMdCloudUpload className="text-blue-500 w-14 h-6" />{" "}
                <p className="text-xs text-slate-400"> upload a pdf</p>
                <p className="text-xs text-slate-400"> {selectedfile}</p>
              </div>
              {/* Hidden file input */}
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => {
                  // Handle file change (e.g., show file name)
                  console.log(e.target.files[0]?.name);
                  setselectedfile(e.target.files[0]?.name);
                }}
              />
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>
        {/* card 5 */}
        <div className="w-2/6 flex items-start mb-7">
          <div className="flex items-center mb-4">
            <CgNotes className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500">
              Agreement under Disputes
            </p>
            <div className="flex space-x-4">
              <div
                className="flex flex-col items-center justify-center w-32 mt-5 h-44 rounded-md cursor-pointer"
                style={{
                  backgroundColor: "rgb(181 194 255 / 29%)",
                  border:
                    "2px dashed rgb(59 130 246 / var(--tw-text-opacity, 1))",
                }}
              >
                <IoMdCloudUpload className="text-blue-500 w-14 h-10 mb-2" />{" "}
                <p className="text-xs text-gray-500">Upload the Contract</p>
                <p className="text-blue-500 " style={{ fontSize: "0.5rem" }}>
                  Max 2MB, PDF
                </p>
                <div
                  className="flex items-center cursor-pointer "
                  onClick={handleClick}
                >
                  <p className="text-xs text-slate-400"> {selectedfile}</p>
                </div>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept=".pdf"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    // Handle file change (e.g., show file name)
                    console.log(e.target.files[0]?.name);
                    setselectedfile(e.target.files[0]?.name);
                  }}
                />
              </div>
              <div
                className="flex flex-col items-center justify-center w-32 mt-5 rounded-md cursor-pointer"
                style={{
                  backgroundColor: "rgb(181 194 255 / 29%)",
                  border:
                    "2px dashed rgb(59 130 246 / var(--tw-text-opacity, 1))",
                }}
              >
                <IoMdCloudUpload className="text-blue-500 w-14 h-10 mb-2" />{" "}
                <p className="text-xs text-gray-500">Arbitration Agreement</p>
                <p className="text-blue-500 " style={{ fontSize: "0.5rem" }}>
                  Max 2MB, PDF
                </p>
                <div
                  className="flex items-center cursor-pointer "
                  onClick={handleClick}
                >
                  <p className="text-xs text-slate-400"> {selectedfile}</p>
                </div>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept=".pdf"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    // Handle file change (e.g., show file name)
                    console.log(e.target.files[0]?.name);
                    setselectedfile(e.target.files[0]?.name);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>

        {/* card 6 */}
        <div className="w-2/6 flex items-start mb-7">
          <div className="flex items-center mb-4">
            <ImFilesEmpty className="text-blue-500 w-14 h-6" />
          </div>
          {/* Input for Contract Value */}
          <div className="flex flex-col place-items-start">
            <p className="font-semibold text-xl text-gray-500 w-64">
              Additional Documentation
            </p>
            <div className="flex space-x-4 items-center">
              <div
                className="flex flex-col items-center  justify-center w-32 mt-5 h-44 rounded-md cursor-pointer"
                style={{
                  backgroundColor: "rgb(181 194 255 / 29%)",
                  border:
                    "2px dashed rgb(59 130 246 / var(--tw-text-opacity, 1))",
                }}
              >
                <IoMdCloudUpload className="text-blue-500 w-14 h-10 mb-2" />{" "}
                <p className="text-xs text-gray-500">Upload the Contract</p>
                <p className="text-blue-500 " style={{ fontSize: "0.5rem" }}>
                  Max 2MB, PDF
                </p>
                <div
                  className="flex items-center cursor-pointer "
                  onClick={handleClick}
                >
                  <p className="text-xs text-slate-400"> {selectedfile}</p>
                </div>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept=".pdf"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    // Handle file change (e.g., show file name)
                    console.log(e.target.files[0]?.name);
                    setselectedfile(e.target.files[0]?.name);
                  }}
                />
              </div>
              {display && (
                <div
                  className="flex flex-col items-center justify-center w-32 mt-5 h-44 rounded-md"
                  style={{
                    backgroundColor: "rgb(181 194 255 / 29%)",
                    border:
                      "2px dashed rgb(59 130 246 / var(--tw-text-opacity, 1))",
                  }}
                >
                  <IoMdCloudUpload className="text-blue-500 w-14 h-10 mb-2" />{" "}
                  <p className="text-xs text-gray-500">Upload the Contract</p>
                  <p className="text-blue-500 " style={{ fontSize: "0.5rem" }}>
                    Max 2MB, PDF
                  </p>
                  <div
                    className="flex items-center cursor-pointer "
                    onClick={handleClick}
                  >
                    <p className="text-xs text-slate-400"> {selectedfile}</p>
                  </div>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept=".pdf"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      // Handle file change (e.g., show file name)
                      console.log(e.target.files[0]?.name);
                      setselectedfile(e.target.files[0]?.name);
                    }}
                  />
                </div>
              )}
              {!display && (
                <BsPlusCircle
                  className="text-blue-500 w-14 h-12 mb-2 cursor-pointer"
                  onClick={() => setdisplay(true)}
                />
              )}
            </div>
          </div>
          {/* Dropdown for Currency Selection */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
