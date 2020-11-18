import React from "react";

import WidgetLayout from "./WidgetLayout";

export default class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {}
    };
    this.datas = [1, 2, 3];
    this.datam = { zzz: 1 };
    this.getData();
  }

  getData() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=5c84bd6294b249fa97ae3ca1c3ca0c4c"
    )
      .then((res) => {
        console.log("res " + res);
        return res.json();
      })
      .then((data) => {
        console.log("data " + data);
        //let newdata = JSON.parse(data);
        // console.log("newdata " + newdata);
        // this.setState({ response: newdata });
        //  console.log(Object.entries(data));
        //let zzz = Object.entries(data);
        this.setState({ response: data });
        //let zzz = JSON.parse(newdata);
        //console.log("zzz " + zzz);
        //this.setState({ response: zzz });
        // this.datas = data;
        // console.log("this.datas " + this.datas.coord.lon);
        console.log("resp: " + this.state.response.coord.lon);
      })
      .catch(() => {
        console.log("error");
      });
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <WidgetLayout info={this.datas} />
      </>
    );
  }
}
