import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

interface CheckBoxProperties extends ComponentBaseProperties {
}

interface CheckBoxState extends ComponentBaseState {

}

export default class CheckBox extends ComponentBase<CheckBoxProperties, CheckBoxState> {
  public render() {
    const elementClasses = classNames(styles.component, this.props.componentClasses);
    const checkBoxElementClasses = classNames(styles.checkBoxElement);

    const textElementClasses = classNames(styles.textElement);
    return (
      <div className={elementClasses}>
        <div className={checkBoxElementClasses}></div>
        <div className={textElementClasses}>{this.props.text}</div>
      </div>
    );
  }
}
