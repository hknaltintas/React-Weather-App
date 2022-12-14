import React ,{ createContext, useContext, useEffect, useState } from "react";

const DropDownContext = createContext();

export const DropDownProvider = ({ children }) => {
  const [cities, setCities] = useState();
  const [selectCity,setSelectCity]=useState("Niğde");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json"
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  console.log(cities);
  const values = {
    cities,
    setCities,
    selectCity,
    setSelectCity
  };
  return (
    <DropDownContext.Provider value={values}>
        {children}
      </DropDownContext.Provider>
  );
};

export const useDropDown = () => useContext(DropDownContext);

export default DropDownContext;
