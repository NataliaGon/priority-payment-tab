import * as React from "react";
import classNames from 'classnames';
import styles from "./TextInput.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

class TextInputProperties extends ComponentBaseProperties {

}

interface TextInputState extends ComponentBaseState {

}

export default class TextInputElement extends ComponentBase<TextInputProperties, TextInputState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <input type="text" />
    );
  }
}
