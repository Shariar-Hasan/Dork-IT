import React, { useState } from "react";
import "./App.css";
import DorkForm from "./Components/DorkForm/DorkForm";
import DorkList from "./Components/DorkList/DorkList";
import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [dorks, setDorks] = useState([]);

  const addDork = (data) => {
    const { dorkType, dorkText } = data;
    if (dorkText.trim() !== "") {
      setDorks([...dorks, `${dorkType}:${dorkText}`]);
    }
  };

  const handleSearch = () => {
    if (dorks.length > 0) {
      const googleDork = dorks.join(" ");
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        googleDork
      )}`;
      window.open(googleSearchUrl, "_blank");
    }
  };

  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      <Heading text={"Dork it"} />
      <div className="container mx-auto">
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
      <Footer />
    </div>
  );
}

export default App;
