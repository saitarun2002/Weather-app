import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weacondtion from "./Weacondtion";
import ready from "./assests/picture.png"
function App() {
  const APIkey = "debac29e57b309139e6e1c66b984ee2b";
  const [data, setData] = useState();
  const [city, setCity] = useState("");



  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIkey;

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, [url]);

  function handler(event) {
    setCity(event.target.value);
  }


  return (
    <div className="hello">

      <div> <img alt = " pic " src={ready} className="imagename" /> </div>
     
        <div className="container">
          <div className="left">
          <Weacondtion data={data} />
          </div>
          <div className="right">
          <div className="input">
              <div className="inputsection">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  autoFocus
                  placeholder="Enter City Name"
                  id=""
                  value={city}
                  onChange={handler}
                />
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default App;


