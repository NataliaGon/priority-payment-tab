import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor, PriorityIcon, TextColor } from "../../core";
import { GlobalStyles } from '../../core/global-styles';
import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";

type IconSkin = "standart" | "primary" | "danger"

interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  hoverColor?: TextColor;
  counterValue?: number;
  invisible?: boolean;
  onClick?: () => void;
  skin?:IconSkin;
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
    const iconVisibilityClass = this.props.invisible && styles.invisible;
    const skinClass = this.props.skin && styles[this.props.skin];
    const hoverClass = this.props.onClick && styles.hoverable;
    const iconClass = classNames(styles.component, this.props.icon, this.props.componentClasses, skinClass, hoverClass, iconVisibilityClass, this.props.textSize);
    const iconCounter = this.props.counterValue ? <IconCounter count={this.props.counterValue} /> : null;
    return (
      <div className={iconClass} onClick={this.props.onClick}>{iconCounter}{this.props.children}</div>
    )
  }
}
