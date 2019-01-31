import classNames from 'classnames';
import * as React from 'react';

import { ComponentBase, ComponentBaseProperties, PriorityIcon } from '../../../core';
import { Icon } from '../../Icon';
import styles from './Button.module.scss';

type ButtonSkin = "primary" | "secondary" | "stroke" | "strokeLight" | "strokeTransparent";
type ButtonWidth = "regularFixed" | "fullWidth" | "contentWidth";
type ButtonShape = "regular" | "round" | "square";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin;
  width?: ButtonWidth;
  shape?: ButtonShape;
  size?: ButtonSize;
  disabled?: boolean;
  darkContainer?: boolean;
  elevated?: boolean;
  active?: boolean;
  icon?: PriorityIcon;
  prefixIcon?: PriorityIcon;
  suffixIcon?: PriorityIcon;
  onClick?: () => void;
}

const defaultButtonProperties: ButtonProperties = {
  skin: "primary",
  width: "contentWidth",
  shape: "regular",
  size: "medium",
  elevated: true
}

export class Button extends ComponentBase<ButtonProperties> {

  static defaultProps = defaultButtonProperties;

  public render() {
    const { skin, width, size, shape, disabled, active, darkContainer, elevated, icon, prefixIcon = icon, suffixIcon, children } = this.props;

    const skinClass = skin && styles[skin];
    const widthClass = width && styles[width];
    const shapeClass = shape && styles[shape];
    const sizeClass = size && styles[size];

    const buttonClass = classNames(styles.component,
      this.props.componentClasses,
      skinClass,
      widthClass,
      shapeClass,
      sizeClass,{
        [styles.title]: children,
        [styles.disabled]: disabled,
        [styles.darkContainer]: darkContainer,
        [styles.elevated]: elevated,
        [styles.active]: active
      });

    return (
      <button className={buttonClass} onClick={this.props.onClick}>
        {prefixIcon && <Icon icon={prefixIcon} componentClasses={styles.prefixIcon}/>}
        {this.props.children}
        {suffixIcon && <Icon icon={suffixIcon} componentClasses={styles.suffixIcon}/>}
      </button>
    );
  }
}
