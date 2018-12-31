import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";
import { Icon } from "../../Icon";

import styles from "./Button.module.scss";

type ButtonSkin = "regular" | "stroke" | "strokeLight";
type ButtonWidth = "regularFixed" | "fullWidth" | "contentWidth";
type ButtonShape = "none" | "round" | "square";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin;
  width?: ButtonWidth;
  shape?: ButtonShape;
  size?: ButtonSize;
  icon?: PriorityIcon;
  onClick?: () => void;
}

interface ButtonState extends ComponentBaseState {

}

const defaultButtonProperties: ButtonProperties = {
  skin: "regular",
  width: "contentWidth",
  shape: "none",
  size: "medium"
}

export class Button extends ComponentBase<ButtonProperties, ButtonState> {

  // protected defaultProperties = function (): any {
  //     return new DefaultButtonProperties();
  // }

  static defaultProps = defaultButtonProperties;

  public render() {
    const { skin, width, size, shape, icon, children } = this.props;
    const skinClass = skin && styles[skin];
    const widthClass = width && styles[width];
    const shapeClass = shape && styles[shape];
    const sizeClass = size && styles[size];

    const darkThemeClass = styles.darkTheme;

    const buttonClass = classNames(styles.component, this.props.componentClasses, skinClass, widthClass, shapeClass, sizeClass, darkThemeClass, {[styles.title]: children});

    return (
      <button className={buttonClass} onClick={this.props.onClick}>
        {icon && <Icon icon={icon} componentClasses={styles.icon}/>}
        {this.props.children}
      </button>
    );
  }
}
