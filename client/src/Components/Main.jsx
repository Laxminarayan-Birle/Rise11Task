import React from "react";
import Progressbar from "./Progressbar";
import Cardcomponent from "./Cardcomponent";

const Main = () => {
  return (
    <div
      className="pt-1 flex-1 w-1/12 sm:w-9/12 lg:w-9/12 xl:9/12"
      style={{
        backgroundColor: "rgb(239 241 250)",
        borderRadius: "10px",
        height: "93vh",
      }}
    >
      <Progressbar />
      <Cardcomponent />
    </div>
  );
};

export default Main;
