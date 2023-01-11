import React, { useState } from "react";
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=cb5afc911a9d809518289772f2de354e`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Buscar ciudad...'
          type="text" />
      </div>

      <div className="container">
        <div className="top">
          <div className="ubicacion">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="descripcion">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className="icono">
            {data.weather ? <p><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="icon" /></p> : null}

          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="sensacion">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <span>Sensacion Termica</span>
            </div>
            <div className="humedad">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <span>Humedad</span>
            </div>
            <div className="viento">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              <span>Viento</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;