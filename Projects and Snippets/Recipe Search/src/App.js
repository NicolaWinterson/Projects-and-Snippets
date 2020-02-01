import React, {useEffect, useState} from "react";
import AppInfo from "./AppInfo"
import "./App.css";

const App = () => {
  const APP_ID = AppInfo.APP_ID;
  const APP_KEY = AppInfo.APP_KEY;

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const  [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect has been run")
  });

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="seach-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
 