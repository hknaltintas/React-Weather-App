import React from "react";
import { useWeather } from "../context/WeatherContext";

function Card() {
  const { weather } = useWeather();
  //console.log(weather.list);
  const date1 = weather && weather[0].dt;
  let newDate = new Date(date1 * 1000).toLocaleDateString("default", {
    weekday: "long",
  });
  console.log("Date:", newDate);
  return (
    <div className="CardBody">
      {weather &&
        weather
          .filter(
            (item, index) => index % 8 === 0 || weather.length - 1 === index
          )
          .map((item, index) => {
            let newDate = new Date(item.dt * 1000).toLocaleDateString(
              "default",
              { weekday: "long" }
            );
            if (index === 0) {
              return (
                <div className="Card Active" key={index}>
                  {newDate}
                  <div
                    className={`Weather ${item.weather[0].main.replace(
                      /\s/g,
                      ""
                    )}`}
                    key={index}
                  ></div>
                  <span>{item.main.temp_max}</span>
                  <span>{item.main.temp_min}</span>
                </div>
              );
            } else {
              return (
                <div className="Card" key={index}>
                  {newDate}
                  <div
                    className={`Weather ${item.weather[0].main.replace(
                      /\s/g,
                      ""
                    )}`}
                    key={index}
                  ></div>
                  <span>{item.main.temp_max}</span>
                  <span className="passive">{item.main.temp_min}</span>
                </div>
              );
            }
          })}
    </div>
  );
}

export default Card;
