import * as React from "react";
import classNames from 'classnames';
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

import styles from "./iconCounter.module.scss";

interface IconCounterProperties extends ComponentBaseProperties {}
interface IconCounterState extends ComponentBaseState {}

export default class IconCounter extends ComponentBase<IconCounterProperties,  IconCounterState> {
  public render() {
    const iconClass = classNames(styles.component);
    return(
      <div className={iconClass}><span>11</span> </div>
    );
  }

  
}
