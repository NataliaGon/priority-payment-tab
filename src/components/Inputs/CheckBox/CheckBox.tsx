import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  ComponentBase, ActiveProperty } from "../../../core";

import styles from "./CheckBox.module.scss";

interface CheckBoxProperties extends ComponentBaseProperties, ActiveProperty {

}


export function CheckBox (props:CheckBoxProperties){

    const propsClass = props.active? styles.checked: ''; 

    const elementClasses = classNames(styles.component,  propsClass);

    return (
      <span className={elementClasses}></span>
    );
  }

