import React from "react";
import spy from "./../../Assets/spy.png";
const Heading = ({ text }) => {
  return (
    <div className="text-4xl my-10">
      <img className="w-20 mx-auto" src={spy} alt={"Spy"} />
      <h1 className="text-center text-green-500 flex justify-center ">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
