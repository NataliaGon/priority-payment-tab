import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  PriorityIcon, TextColor } from "../../core";
import styles from "./Icon.module.scss";
import IconCounter from "./IconCounter/IconCounter";


interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  counterValue?: number;
  visible?: boolean;
  onClick?: () => void;
}


export  function Icon (props:IconProperties) {


    const iconVisibilityClass = props.visible ? styles.visible : '';
    const iconColorClass = props.iconColor ? "text-color-" + props.iconColor : "";//default "text-color-grey" ?
    const iconClass = classNames(styles.component, props.icon, props.componentClasses, iconColorClass, iconVisibilityClass, props.textSize);
    const iconCounter = props.counterValue ? <IconCounter count={props.counterValue} /> : null;

    return (
      <div className={iconClass}>{iconCounter}</div>
    )
  }
