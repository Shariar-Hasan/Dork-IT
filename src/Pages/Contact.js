import React from "react";
import { contacts } from "../Configs/htmlConfigs";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-dark-f shadow-md rounded-lg p-6 box-border">
        <h1 className="text-3xl font-semibold mb-4">Contact Information</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">GitHub Repository</h2>
            <p className="text-gray-600">
              Find more about this project on GitHub.
            </p>
            <a
              href={contacts.repository.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repository
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-dark">Feel free to reach out via github.</p>
            <a
              href={contacts.github.link}
              className="text-blue-500 hover:underline"
            >
              {contacts.github.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
