import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";

import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";

class IconProperties extends ComponentBaseProperties {
  skin?: string;
  fontIconClass?: string;
}
interface IconState extends ComponentBaseState {
  counterValue?: number;
}
export default class Icon extends ComponentBase<IconProperties, IconState> {

  public render() {
    const iconClass = classNames(styles.component, this.props.fontIconClass)
    const iconCounter = this.state && this.state.counterValue ? <IconCounter count={this.state.counterValue} /> : null;
    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
