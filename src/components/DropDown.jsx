import { useState, useEffect } from "react";

function DropDownContext() {
  const [cities, setCities] = useState();
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json"
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return (
    <form>
      <select id="CityDropDown" defaultValue="Niğde">
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
  );
}

export default DropDownContext;
