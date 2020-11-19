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
    // this.datas = [1, 2, 3];
    // this.datam = { zzz: 1 };
    this.getData();
  }

  // componentDidMount() {
  getData() {
    fetch(url)
      .then((res) => {
        console.log("res " + res);
        return res.json();
      })
      .then((data) => {
        console.log("data " + data);
        this.setState({ response: data });
        // this.setState({ response: [...this.state.response, data] });

        // console.log(
        //   "resp: " + JSON.stringify(this.state.response[0].coord.lon)
        // );
      })
      .catch(() => {
        console.log("error");
      });
  }
  // }

  // componentDidMount() {}
 
  render() {
    console.log("resp1: " + this.state.response);
    // console.log("resp1: " + this.state.response[0].coord.lon);
    return (
      <>
        <WidgetLayout info={this.state.response} />
      </>
    );
  }
}
