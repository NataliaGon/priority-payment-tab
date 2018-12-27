import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./Button.module.scss";

type ButtonSkin = "regular" | "stroke" | "roundStrokeIcon";
type ButtonWidth = "regularFixed" | "fullWidth" | "ccontentWidth";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin;
  width?: ButtonWidth;
  onClick?: () => void;
}

interface ButtonState extends ComponentBaseState {

}

export class Button extends ComponentBase<ButtonProperties, ButtonState> {

  public render() {
    const skinClass = styles[this.props.skin ? this.props.skin : ""];
    const widthClass = styles[this.props.width ? this.props.width : ""];

    const darkThemeClass = styles.darkTheme;

    const buttonClass = classNames(styles.component, this.props.componentClasses, skinClass, widthClass, darkThemeClass);

    return (
      <button className={buttonClass} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
