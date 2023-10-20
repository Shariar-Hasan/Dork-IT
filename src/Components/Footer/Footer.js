import React from "react";

const Footer = () => {
  return (
    <div className="text-center text-dark bg-dark-f py-5 mt-10">

      <p>
        © Copyright {new Date().getFullYear()} ||{" "}
        <a
          className="text-mono text-blue-500"
          href="https://github.com/Shariar-Hasan"
        >
          Ethico
        </a>{" "}
        || Made with Love{" "}
        <i className="fa fa-heart text-red-600" aria-hidden="true"></i>
      </p>
    </div>
  );
};

export default Footer;
