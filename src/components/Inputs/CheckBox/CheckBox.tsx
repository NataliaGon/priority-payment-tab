import * as React from "react";
import classNames from 'classnames';
import { InputBaseProperties,  ComponentBase, ActiveProperty } from "../../../core";

import styles from "./CheckBox.module.scss";

interface CheckBoxProperties extends InputBaseProperties {
  checked?: boolean,
  disabled?: boolean,
  onChange?(): void,
  children?: JSX.Element,
  inputRef?: React.RefObject<HTMLInputElement>
}

export const CheckBox = (props: CheckBoxProperties) => {

    const elementClasses = classNames(styles.component, props.componentClasses, {[styles.disabled]: props.disabled});
    const checkboxClasses = classNames(styles.checkbox, {[styles.checked]: props.checked});

    return (
      <div className={elementClasses} onClick={props.onChange}>
        <input
          type="checkbox"
          ref={props.inputRef}
          className={styles.input}
          checked={props.checked}
          disabled={props.disabled}
          onChange={props.onChange}
          onClick={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        <span className={checkboxClasses}></span>
        {props.children}
      </div>
    );
  }

