import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor } from "../../base-classes";

import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";
import { PriorityIcon } from "../../base-classes/PriorityIcon";

interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: IconColor;
  counterValue?: number;
}

interface IconState extends ComponentBaseState {
  counterValue?: number;
}

export default class Icon extends ComponentBase<IconProperties, IconState> {

  constructor(properties: IconProperties, state: IconState) {
    super(properties, state);

    if (properties.counterValue) {
      this.setState({ counterValue: properties.counterValue });
    }
  }

  public render() {

    let iconColorClass = "icon-color-grey";

    if (this.props.iconColor) {
      iconColorClass = "icon-color-" + this.props.iconColor;
    }

    const iconClass = classNames(styles.component, this.props.icon, iconColorClass);
    const iconCounter = this.state && this.state.counterValue ? <IconCounter count={this.state.counterValue} /> : null;

    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
