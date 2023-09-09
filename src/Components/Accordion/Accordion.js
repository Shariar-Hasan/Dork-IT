import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        {title}
        <span
          className={`ml-2 ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-transform inline-block`}
        >
          ▼
        </span>
      </button>
      {isOpen && <p className="ml-4 mt-2">{content}</p>}
    </div>
  );
};

export default Accordion;
