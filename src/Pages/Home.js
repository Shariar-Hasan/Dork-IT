import React from "react";
import DorkForm from "../Components/DorkForm/DorkForm";
import DorkList from "../Components/DorkList/DorkList";
import { useSiteData } from "../Contexts/useSiteData";
import Heading from "./../Components/Heading/Heading";

const Home = () => {
  const { dorks, setDorks, handleSearch } = useSiteData();
  const addDork = (data) => {
    let { dorkType, dorkText } = data;
    if (dorkText.trim() !== "") {
      if (dorkText.split(" ").length > 1) {
        dorkText = `"${dorkText}"`;
      }
      const newDork = `${dorkType}:${dorkText}`;
      setDorks([...dorks, newDork]);
      console.log({ newDork, dorks });
    }
  };
  return (
    <div className="container mx-auto mb-20">
      <Heading text={"Dork it"} />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <DorkForm addDork={addDork} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <DorkList
            dorks={dorks}
            handleSearch={handleSearch}
            setDorks={setDorks}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
