import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor, PriorityIcon, TextColor } from "../../core";
import { GlobalStyles } from '../../core/global-styles';
import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";


interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  counterValue?: number;
  visible?: boolean;
}

interface IconState extends ComponentBaseState {
  counterValue?: number;
}

export class Icon extends ComponentBase<IconProperties, IconState> {

  constructor(properties: IconProperties, state: IconState) {
    super(properties, state);

    if (properties.counterValue) {
      this.setState({ counterValue: properties.counterValue });
    }
  }

  static defaultProps = {
    visibility: false,
    position: false
  };

  public render() {

    let iconColorClass = GlobalStyles["text-color-grey"];

    if (this.props.iconColor) {
      iconColorClass = GlobalStyles["text-color-" + this.props.iconColor];
    }

    let iconVisibilityClass = "";

    if (this.props.visible) {
      iconVisibilityClass = styles.visible;
    }

    const iconClass = classNames(styles.component, this.props.icon, iconColorClass, iconVisibilityClass, this.props.componentClasses);
    const iconCounter = this.state && this.state.counterValue ? <IconCounter count={this.state.counterValue} /> : null;

    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
