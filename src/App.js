import "./App.css";
import Body from "./components/Body";
import { WeatherProvider } from "./context/WeatherContext";
import { DropDownProvider } from "./context/DropDownContext";

function App() {
  return (
    <div className="App">
      <DropDownProvider>
        <WeatherProvider>
          <Body />
        </WeatherProvider>
      </DropDownProvider>
    </div>
  );
}

export default App;
