import React from "react";
// import axios from 'axios';


function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=montevideo&appid={cb5afc911a9d809518289772f2de354e}`

  return (
    <div className="app">
      
      <div className="container">
        <div className="top">
          <div className="ubicacion">
            <p>Montevideo</p>
          </div>
          <div className="temperatura">
            <h1>30°C</h1>
          </div>
          <div className="descripcion">
            <p>Nublado</p>
          </div>
        </div>
        <div className="bottom">
          <div className="sensacion">
            <p className="bold">35°C</p>
            <p>Sensacion Termica</p>
          </div>
          <div className="humedad">
            <p className="bold">80%</p>
            <p>Humedad</p>
          </div>
          <div className="viento">
            <p className="bold">30KMH</p>
            <p>Viento</p>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;