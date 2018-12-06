import * as React from "react";
import styles from "./Button.scss";

export default class Button extends React.Component {
  public render() {
    return (
      <button className={styles.button}>{this.props.children}</button>
    );
  }
}
