import React from "react";

export default class WidgetLayout extends React.Component {
  render() {
    const test = JSON.stringify(this.props.info);
    return (
      <>
        <div>widget</div>
        <div>{test}</div>
      </>
    );
  }
}
