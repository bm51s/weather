import React from "react";

export default class WidgetLayout extends React.Component {
  // test = JSON.stringify(this.props.info);

  // test = JSON.stringify(this.props.info.coord.lon);
  // constructor(props) {
  // super(props);
  // test = JSON.stringify(props.info.coord.lon);
  // test = this.props.info[0].coord.lon
  // this.user = this.props;
  // this.somedata = JSON.parse(this.props.info);
  // this.somedata = this.props.info;
  // console.log("this.somedata " + this.somedata);
  // }

  render() {
    const test = JSON.stringify(this.props.info.coord.lon);
    // console.log("this.props.info " + test);
    return (
      <>
        <div>widget</div>
        <div>{test}</div>
      </>
    );
  }
}
