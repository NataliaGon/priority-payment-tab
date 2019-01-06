import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../core";

import styles from "./Button.module.scss";

type ButtonSkin = "regular" | "stroke" | "roundStrokeIcon" | "secondary";
type ButtonWidth = "regularFixed" | "fullWidth" | "contentWidth" | "small";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin;
  width?: ButtonWidth;
  disabled?: boolean;
}

interface ButtonState extends ComponentBaseState {
  isActive?: boolean;
}

export class Button extends ComponentBase<ButtonProperties, ButtonState> {

  state: ButtonState = {
    isActive: false
  }

  clickHandler = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  public render() {
    const skinClass = styles[this.props.skin ? this.props.skin : ""];
    const widthClass = styles[this.props.width ? this.props.width : ""];
    const darkThemeClass = styles.darkTheme;
    const activeBtnStyles = this.state.isActive ? styles[this.props.skin + 'Active'] : "";
    const disabledBtnStyles = this.props.disabled ? styles[this.props.skin + 'Disabled'] : "";

    let buttonClass = "";

    if (this.state.isActive) {
      buttonClass = classNames(styles.component, widthClass, skinClass, activeBtnStyles, darkThemeClass);
    } else {
      buttonClass = classNames(styles.component, skinClass, widthClass, darkThemeClass);
    }

    if (this.props.disabled) {
      buttonClass = classNames(styles.component, widthClass, skinClass, disabledBtnStyles, darkThemeClass);
    }

    return (
      <button className={buttonClass} onClick={this.clickHandler}>{this.props.children}</button>
    );
  }
}
