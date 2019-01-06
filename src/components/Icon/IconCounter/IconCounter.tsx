import * as React from "react";
import classNames from 'classnames';

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../core";

import styles from "./IconCounter.module.scss";

interface IconCounterProperties extends ComponentBaseProperties {
  count?: number;
}

interface IconCounterState extends ComponentBaseState {

}

export default class IconCounter extends ComponentBase<IconCounterProperties, IconCounterState> {

  public render() {
    const iconClass = classNames(styles.component);

    if (this.props.count && this.props.count > 0) {
      return (
        <div className={iconClass}><span>{this.props.count}</span></div>
      )
    }
    return null;
  }
}
