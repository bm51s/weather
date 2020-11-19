import React from "react";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=5c84bd6294b249fa97ae3ca1c3ca0c4c";

export default class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      weather: "",
      temp: "",
      temp_min: "",
      temp_max: "",
      pressure: "",
      humidity: "",
      wind: "",
      wind_deg: "",
      clouds: "",
      sunrise: "",
      sunset: ""
    };
  }

  componentDidMount() {
    fetch(url)
      .then((res) => {
        console.log("res " + res);
        return res.json();
      })
      .then((data) => {
        console.log("data " + data);
        this.setState({
          response: data.name,
          weather: data.weather[0].description,
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          wind_deg: data.wind.deg,
          clouds: data.clouds.all,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        });
      })
      .catch(() => {
        console.log("error");
      });
  }

  render() {
    console.log("resp1: " + this.state.response);
    // let { info } = this.state.response;
    return (
      <>
        <div>city: {this.state.response}</div>
        <div>weather: {this.state.weather}</div>
        <div>temp: {this.state.temp}</div>
        <div>temp_min: {this.state.temp_min}</div>
        <div>temp_max: {this.state.temp_max}</div>
        <div>pressure: {this.state.pressure}</div>
        <div>wind: {this.state.wind}</div>
        <div>wind_deg: {this.state.wind_deg}</div>
        <div>clouds: {this.state.clouds}</div>
        <div>sunrise: {this.state.sunrise}</div>
        <div>sunset: {this.state.sunset}</div>
      </>
    );
  }
}
