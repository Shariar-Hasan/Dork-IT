import React from "react";

const ContactCard = ({ cnt }) => {
  return (
    <div className="card bg-dark p-3 box-border grid md:grid-cols-4 sm:grid-cols-1 grid-cols-4">
      <div className="col-span-1 flex justify-center items-center text-4xl text-center ">
        {cnt.icon}
      </div>
      <div className="col-span-3 text-center md:text-right">
        <h3>{cnt.title}</h3>
        <a
          href={cnt.link}
          target="_blank"
          rel="noreferrer noopenner"
          className="px-3 py-[1px] mt-2 inline-block rounded bg-neutral-800"
        >
          Visit Link
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
