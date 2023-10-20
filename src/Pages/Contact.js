import React from "react";
import { contacts } from "../Configs/htmlConfigs";
import ContactCard from "../Components/ContactCard/ContactCard";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <h1 className="md:text-3xl text-base font-semibold mb-4 text-center">
        Contact Information
      </h1>
      <div className="p-6 ">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-1">
          {contacts.map((cnt, i) => (
            <div key={i} className="col-span-1">
              <ContactCard cnt={cnt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
