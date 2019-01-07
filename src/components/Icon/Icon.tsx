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
  onClick?: () => void;
}

interface IconState extends ComponentBaseState {

}

export class Icon extends ComponentBase<IconProperties, IconState> {

  constructor(properties: IconProperties, state: IconState) {
    super(properties, state);

    if (this.props.counterValue) {
      this.setState({ counterValue: this.props.counterValue });
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

    const iconVisibilityClass = this.props.visible? styles.visible:'';
    const iconClass = classNames(styles.component, this.props.icon, iconColorClass, iconVisibilityClass, this.props.componentClasses);
    const iconCounter =  (this.props.counterValue) ? <IconCounter count={this.props.counterValue} /> : null;

    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
}
