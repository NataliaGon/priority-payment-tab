import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  PriorityIcon, TextColor } from "../../core";
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


export  function Icon (props:IconProperties) {


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

    const iconVisibilityClass = this.props.visible? styles.visible:'';
    const iconColorClass = this.props.iconColor ? "text-color-" + this.props.iconColor : "";//default "text-color-grey" ?
    const iconClass = classNames(styles.component, this.props.icon, this.props.componentClasses, iconColorClass, iconVisibilityClass, this.props.textSize);
    const iconCounter = this.props.counterValue ? <IconCounter count={this.props.counterValue} /> : null;

    return (
      <div className={iconClass} onClick={this.props.onClick}>{iconCounter}{this.props.children}</div>
    )
  }
