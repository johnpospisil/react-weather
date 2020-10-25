import React from "react";

const api = {
  key: process.env.OPEN_WEATHER_API_KEY,
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
