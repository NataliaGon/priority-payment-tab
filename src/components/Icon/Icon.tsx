import classNames from 'classnames';
import * as React from 'react';

import { ComponentBaseProperties, PriorityIcon, TextColor } from '../../core';
import styles from './Icon.module.scss';
import IconCounter from './IconCounter/IconCounter';

type IconSkin = "standart" | "primary" | "danger"

interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  hoverColor?: TextColor;
  counterValue?: number;
  invisible?: boolean;
  onClick?: () => void;
  skin?: IconSkin;
}

export const Icon = function (props: IconProperties | any) {

  const iconVisibilityClass = props.invisible ? styles.invisible : '';
  const skinClass = props.skin && styles[props.skin];
  const hoverClass = props.onClick && styles.hoverable;
  const iconColorClass = props.iconColor ? "text-color-" + props.iconColor : "";
  const iconClass = classNames(styles.component, props.icon, props.componentClasses, iconColorClass, skinClass, hoverClass, iconVisibilityClass, props.textSize);
  const iconCounter = props.counterValue ? <IconCounter count={props.counterValue} /> : null;

  return (
    <div className={iconClass} onClick={props.onClick}>{iconCounter}{props.children}</div>
  )
}
