import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

class CheckBoxProperties extends ComponentBaseProperties {

}

interface CheckBoxState extends ComponentBaseState {
  checked?: boolean;
}

export class CheckBox extends ComponentBase<CheckBoxProperties, CheckBoxState> {

  state = {
    checked: true
  }

  public render() {

    let stateClass = "";

    if (this.state.checked) {
      stateClass = styles.checked;
    }

    const elementClasses = classNames(styles.component, this.props.componentClasses, stateClass);

    return (
      <span className={elementClasses}></span>
    );
  }
}
