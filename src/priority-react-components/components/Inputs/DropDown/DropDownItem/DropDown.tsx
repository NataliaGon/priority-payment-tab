import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

class CheckBoxProperties extends ComponentBaseProperties {
  checked?: boolean = false;
}

interface CheckBoxState extends ComponentBaseState {

}

export default class CheckBox extends ComponentBase<CheckBoxProperties, CheckBoxState> {
  public render() {


    const elementClasses = classNames(styles.component);

    return (
      <span className={elementClasses}></span>
    );
  }
}
