import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { store } from "../Assets/store";

const SiteContext = createContext();

export const useSiteData = () => useContext(SiteContext);

export const SiteDataProvider = ({ children }) => {
  // all states
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") || true);
  const [dorks, setDorks] = useState(store.get() || []);

  // all mounting functions
  useEffect(() => {
    localStorage.setItem("theme", isDark);
    if (isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDark]);

  // all user defined functions
  const handleSearch = () => {
    if (dorks.length === 0) {
      toast.error("Dork is Empty");
      return;
    }
    const googleDork = dorks.map((drk) => drk.dork).join(" ");
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      googleDork
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const values = {
    isDark,
    setIsDark,
    handleSearch,
    dorks,
    setDorks,
  };
  return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
};
