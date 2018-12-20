import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../composition";

import styles from "./Button.module.scss";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: string;
  onClick?: () => void;
}

interface ButtonState extends ComponentBaseState {

}

export default class Button extends ComponentBase<ButtonProperties, ButtonState> {
  public render() {
    const buttonClass = classNames(styles.button, this.props.componentClasses)
    return (
      <button className={buttonClass} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
