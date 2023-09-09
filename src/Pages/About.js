import React from "react";
import { dorkTypes } from "../Configs/htmlConfigs";
import Accordion from "../Components/Accordion/Accordion";

const About = () => {
 

  return (
    <div className="container mx-auto mt-6 p-4">
      <h1 className="text-3xl font-semibold mb-4">About Google Dorks</h1>
      <p className="mb-4">
        Google Dorks are specialized search queries that help you find specific
        information on the web more effectively. By combining various dork types
        with your search terms, you can narrow down your search results and
        discover precise information.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        How to Use Google Dorks
      </h2>
      <p className="mb-4">
        To use Google Dorks effectively, follow these steps:
      </p>
      <ol className="list-decimal list-inside pl-4">
        <li>Start with a specific dork type (e.g., intitle, inurl, etc.).</li>
        <li>
          Enter your desired search query or keyword following the dork type.
        </li>
        <li>Combine multiple dorks to refine your search even further.</li>
        <li>
          Click the "Search" button to execute your query and view the results.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Meaning of Each Dork Type
      </h2>
      <div className="space-y-2 mb-4">
        {dorkTypes.map((dork, index) => (
          <Accordion key={index} title={dork.title} content={dork.content} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Getting Accurate Results
      </h2>
      <p>
        To obtain accurate search results with Google Dorks, ensure that your
        queries are well-formed and relevant to your research. Experiment with
        different combinations and dork types to refine your search and retrieve
        the most relevant information.
      </p>
    </div>
  );
};

export default About;
