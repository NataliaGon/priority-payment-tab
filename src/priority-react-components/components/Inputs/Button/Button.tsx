import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./Button.module.scss";

type ButtonSkin = ComponentBaseSkin | "Stroke" | "RoundStrokeIcon";

class ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin = "default";
  onClick?: () => void;
}

interface ButtonState extends ComponentBaseState {

}

export default class Button extends ComponentBase<ButtonProperties, ButtonState> {

  public render() {
    const skinClass = styles[this.props.skin ? this.props.skin : ""];

    const buttonClass = classNames(styles.component, this.props.componentClasses, skinClass)

    return (
      <button className={buttonClass} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
