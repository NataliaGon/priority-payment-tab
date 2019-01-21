import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor, PriorityIcon, TextColor } from "../../core";
import { GlobalStyles } from '../../core/global-styles';
import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";


interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  hoverColor?: TextColor;
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

    const iconVisibilityClass = this.props.visible? styles.visible:'';
    /* why is it text-color- and not icon-color- ?*/
    const iconColorClass = this.props.iconColor ? "text-color-" + this.props.iconColor : "";//default "text-color-grey" ?
    const hoverColorClass = this.props.hoverColor ? "hover-color-" + this.props.hoverColor : "";
    const iconClass = classNames(styles.component, this.props.icon, this.props.componentClasses, iconColorClass, hoverColorClass, iconVisibilityClass, this.props.textSize);
    const iconCounter = this.props.counterValue ? <IconCounter count={this.props.counterValue} /> : null;
    return (
      <div className={iconClass} onClick={this.props.onClick}>{iconCounter}{this.props.children}</div>
    )
  }
}
