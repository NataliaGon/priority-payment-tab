import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  ComponentBase, ActiveProperty } from "../../../core";

import styles from "./CheckBox.module.scss";

interface CheckBoxProperties extends ComponentBaseProperties {
  checked?: boolean,
  disabled?: boolean,
  onChange?(): void,
  children?: JSX.Element
}


export function CheckBox(props: CheckBoxProperties){

    const elementClasses = classNames(styles.component, props.componentClasses, {[styles.disabled]: props.disabled});
    const checkboxClasses = classNames(styles.checkbox, {[styles.checked]: props.checked});

    return (
      <div className={elementClasses} onClick={props.onChange}>
        <span className={checkboxClasses} ></span>
        {props.children}
      </div>
    );
  }

