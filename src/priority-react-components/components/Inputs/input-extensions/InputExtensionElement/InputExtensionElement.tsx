import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

class InputExtensionElementProperties extends ComponentBaseProperties {

}

interface InputExtensionElementState extends ComponentBaseState {

}

export default class InputExtensionElement extends ComponentBase<InputExtensionElementProperties, InputExtensionElementState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <span className={elementClasses}></span>
    );
  }
}
