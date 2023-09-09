import React, { useEffect, useState } from "react";

const Accordion = ({ title, content, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("changed");
  }, [isOpen]);
  return (
    <div className="collapse collapse-plus bg-dark-f text-dark">
      <input type="radio" name="accordion" />
      <div className="collapse-title text-xl font-bold border-b border-b-success">
        How to use {title.slice(0, title.length - 1)}
      </div>
      <div className="collapse-content">
        <p className="p-7 text-justify font-mono font-bold">{content}</p>
        <img className="w-full md:w-1/2 mx-auto" src={img} alt={title} />
      </div>
    </div>
  );
};

export default Accordion;
