import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8a48e025bc92c580efb9f7ab6dba4c0b";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    pressure: undefined,
    max: undefined,
    min: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (city) {
      this.setState({
        temperature: data.main.temp,
       
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        pressure:data.main.pressure,
        max:data.main.temp_max,
        min:data.main.temp_min,
        description: data.weather[0].description,
        error: " "
      });
    } else {
      console.log();
      this.state({
        error: "City not found.",
        
      });
    }
  }
  render() {
    return (
      <div>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature}
                     
                    humidity={this.state.humidity}
                    city={this.state.city}
                    description={this.state.description}
                    wind={this.state.wind}
                    pressure={this.state.pressure}
                    min={this.state.min}
                    max={this.state.max}
                    
                    error={this.state.error}
                  /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
};

export default App;