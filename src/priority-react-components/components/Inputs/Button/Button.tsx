import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./Button.module.scss";

type ButtonSkin = ComponentBaseSkin | "Stroke" | "StrokeIcon";

class ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin = "default";
  onClick?: () => void;
}

interface ButtonState extends ComponentBaseState {

}

export default class Button extends ComponentBase<ButtonProperties, ButtonState> {

  public render() {
    const skinClass = this.props.skin == "default" ? styles.default : styles.stroke;

    const buttonClass = classNames(styles.component, this.props.componentClasses, skinClass)
    return (
      <button className={buttonClass} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
