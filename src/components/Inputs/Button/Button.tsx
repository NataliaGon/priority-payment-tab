import classNames from 'classnames';
import * as React from 'react';

import { ComponentBase, InputBaseProperties, PriorityIcon } from '../../../core';
import { Icon } from '../../Icon';
import styles from './Button.module.scss';

type ButtonSkin = "primary" | "secondary" | "stroke" | "strokeLight" | "strokeTransparent";
type ButtonWidth = "regularFixed" | "fullWidth" | "contentWidth";
type ButtonShape = "regular" | "round" | "square";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProperties extends InputBaseProperties {
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
  buttonRef?: any;
  onClick?: (event?) => void;
}

const defaultButtonProperties: ButtonProperties = {
  skin: "primary",
  width: "contentWidth",
  shape: "regular",
  size: "medium",
  elevated: true,
  tabIndex: 0
}

export class Button extends ComponentBase<ButtonProperties> {

  static defaultProps = defaultButtonProperties;

  public render() {
    const { skin, width, size, shape, disabled, active, darkContainer, elevated, icon, prefixIcon = icon, suffixIcon, children, buttonRef, tabIndex } = this.props;

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
      <button disabled={disabled} ref={buttonRef} tabIndex={tabIndex} className={buttonClass} onClick={this.props.onClick} onFocus={this.props.onFocus} onBlur={this.props.onBlur}>
        {prefixIcon && <Icon icon={prefixIcon} componentClasses={styles.prefixIcon}/>}
        {this.props.children}
        {suffixIcon && <Icon icon={suffixIcon} componentClasses={styles.suffixIcon}/>}
      </button>
    );
  }
}
