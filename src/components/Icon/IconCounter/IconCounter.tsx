import * as React from "react";
import classNames from 'classnames';

import {
  ComponentBaseProperties
} from "../../../core";

import styles from "./IconCounter.module.scss";

interface IconCounterProperties extends ComponentBaseProperties {
  count?: number;
}


export default function IconCounter (props:IconCounterProperties) {
    const iconClass = classNames(styles.component);
    if (props.count && props.count > 0) {
      return (
        <div className={iconClass}><span>{props.count}</span></div>
      )
    }
    return null;
  }

