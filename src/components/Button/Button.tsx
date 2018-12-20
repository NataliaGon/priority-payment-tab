import * as React from "react";
import classNames from 'classnames';

import styles from "./Button.module.scss";

interface ButtonProps {
  /** @type {string} custom className that will be applied to button */
  className: string
}

export default class Button extends React.Component<any, any> {
  public render() {
    const buttonClass = classNames(styles.button, this.props.className)
    return (
      <button className={buttonClass} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
