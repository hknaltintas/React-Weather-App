import { useContext, createContext, useState, useEffect } from "react";
import { useDropDown } from "./DropDownContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");
  const {selectCity}=useDropDown();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${selectCity},tr&appid=64e4b8270d56ddc04e8b3aadd7afc7a2&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.list));
  }, [selectCity]);

  //console.log(weather);
  const values = {
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

export default WeatherContext;
