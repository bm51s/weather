import React from "react";

import WidgetLayout from "./WidgetLayout";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=5c84bd6294b249fa97ae3ca1c3ca0c4c";

export default class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
    this.getData();
  }

  getData() {
    fetch(url)
      .then((res) => {
        console.log("res " + res);
        return res.json();
      })
      .then((data) => {
        console.log("data " + data);
        this.setState({ response: data });
        console.log("this.state.response " + this.state.response);
      })
      .catch(() => {
        console.log("error");
      });
  }

  // componentDidMount() {}

  render() {
    console.log("resp render: " + this.state.response);
    return (
      <>
        <WidgetLayout info={this.state.response} />
      </>
    );
  }
}
