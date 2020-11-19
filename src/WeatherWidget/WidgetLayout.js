import React from "react";

export default class WidgetLayout extends React.Component {
  // test = JSON.stringify(this.props.info.coord.lon);
  // constructor(props) {
  // super(props);
  // this.user = this.props;
  // this.somedata = JSON.parse(this.props.info);
  // this.somedata = this.props.info;
  // console.log("this.somedata " + this.somedata);
  // }

  render() {
    console.log("this.props.info " + this.props.info[0].coord.lon);
    return (
      <>
        <div>widget</div>
        <div>{this.props.info[0].coord.lon}</div>
      </>
    );
  }
}
