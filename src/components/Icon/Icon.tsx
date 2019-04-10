import classNames from 'classnames/bind';
import * as React from 'react';

import { ComponentBaseProperties, PriorityIcon, TextColor } from '../../core';
import styles from './Icon.module.scss';
import IconCounter from './IconCounter/IconCounter';

const cx = classNames.bind(styles);

type IconSkin = "standart" | "primary" | "danger"

interface IconProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconColor?: TextColor;
  counterValue?: number;
  invisible?: boolean;
  onClick?: () => void;
  skin?: IconSkin;
  active?: boolean;
  disabled?: boolean;
  // do we realy need it?
  children?;
  darkContainer?: boolean;
  onContextMenu?: (event: any) => void;
}

export const Icon = function (props: IconProperties) {

    const iconClass = cx('component',
      `icon-${props.icon}`,
      props.textColor,
      props.componentClasses,
      props.skin,
      props.iconColor,
      {
        'active': props.active,
        'hoverable': props.onClick,
        'invisible': props.invisible,
        'disabled': props.disabled
      },
      props.textSize,
      props.darkContainer && [styles.darkContainer]);
    const iconCounter = props.counterValue ? <IconCounter count={props.counterValue} /> : null;

    return (
      <div className={iconClass} onClick={props.onClick} onContextMenu={props.onContextMenu}>{iconCounter}{props.children}</div>
    )
}
