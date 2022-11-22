import React from "react";
import Card from "./Card";
import { useDropDown } from "../context/DropDownContext";

function Body() {
  const { cities,selectCity,setSelectCity } = useDropDown();
 
  return (
    <div className="body">
      {cities && (
        <form>
          <select id="CityDropDown" defaultValue={selectCity} value={cities.name} onChange={(e)=>setSelectCity(e.target.value)}>
            {cities &&
              cities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
          </select>
        </form>
      )}

      <Card />
      {/* {JSON.stringify(weather.list ? weather:null)} */}
    </div>
  );
}

export default Body;
