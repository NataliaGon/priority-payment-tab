import * as React from "react";
import classNames from 'classnames';
import styles from "./DropDown.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

class DropDownProperties extends ComponentBaseProperties {
  checked?: boolean = false;
}

interface DropDownState extends ComponentBaseState {

}

export default class DropDown extends ComponentBase<DropDownProperties, DropDownState> {
  public render() {

    let stateClass = "";
    if (this.props.checked) {
      stateClass = styles.checked;
    }

    const elementClasses = classNames(styles.component, this.props.componentClasses, stateClass);

    return (
      <select className={elementClasses}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    );
  }
}
