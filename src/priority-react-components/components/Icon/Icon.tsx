import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, DefaultTextProperties } from "../../base-classes";

import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";

interface IconProperties extends ComponentBaseProperties {
  fontIconClass?: string;
}
interface IconState extends ComponentBaseState {
  counterValue?: number;
}
export default class Icon extends ComponentBase<IconProperties, IconState> {

  public render() {
    let textColorClass = "";
    if (this.props.textColor) {
      textColorClass = "text-color-" + this.props.textColor;
    }
    const iconClass = classNames(styles.component, this.props.fontIconClass, textColorClass);
    const iconCounter = this.state && this.state.counterValue ? <IconCounter count={this.state.counterValue} /> : null;
    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
