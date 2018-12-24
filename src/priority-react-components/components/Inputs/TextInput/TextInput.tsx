import * as React from "react";
import classNames from 'classnames';
import styles from "./TextInput.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

class TextInputProperties extends ComponentBaseProperties {

}

interface TextInputState extends ComponentBaseState {
  isOpen?: boolean;
}

export default class TextInput extends ComponentBase<TextInputProperties, TextInputState> {

  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  public render() {

    const dropDownVisibilityClass = (this.state && this.state.isOpen) ? styles.expanded : null;
    const elementClasses = classNames(styles.component, this.props.componentClasses, dropDownVisibilityClass);

    return (
      <div className={elementClasses}>
        <div className={classNames(styles.option, styles.active, styles.placeholder)} data-value="placeholder">Choose wisely</div>
        <div className={styles.option} data-value="wow">
          Wow!</div>
        <div className={styles.option} data-value="drop">
          So dropdown!</div>
        <div className={styles.option} data-value="select">
          Very select!</div>
        <div className={styles.option} data-value="custom">
          Much custom!</div>
        <div className={styles.option} data-value="animation">
          Such animation!</div>
      </div>
    );
  }
}
