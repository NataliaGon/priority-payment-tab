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
  visibility?: boolean;
}

interface IconState extends ComponentBaseState {
  counterValue?: number;
}

export  class Icon extends ComponentBase<IconProperties, IconState> {

  constructor(properties: IconProperties, state: IconState) {
    super(properties, state);

    if (properties.counterValue) {
      this.setState({ counterValue: properties.counterValue });
    }
  }

  public render() {

    let iconColorClass = styles.grey;

    if (this.props.iconColor) {
      if (this.props.iconColor === "white") {
        iconColorClass = styles.white;
      }
      if (this.props.iconColor === "blue") {
        iconColorClass = styles.blue;
      }
      if (this.props.iconColor === "black") {
        iconColorClass = styles.black;
      }
      if (this.props.iconColor === "grey") {
        iconColorClass = styles.grey;
      }
    }
    // const iconVisibilityClass=;
    const iconClass = classNames(styles.component, this.props.icon, iconColorClass, styles.display);
    const iconCounter = this.state && this.state.counterValue ? <IconCounter count={this.state.counterValue} /> : null;

    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
