import * as React from "react";

export default class RTLContainer extends React.Component {
  public render() {
    return (
      <div dir="rtl">{this.props.children}</div>
    );
  }
}
