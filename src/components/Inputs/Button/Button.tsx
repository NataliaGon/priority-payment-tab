import classNames from 'classnames';
import * as React from 'react';

import { ComponentBase, ComponentBaseProperties, PriorityIcon } from '../../../core';
import { Icon } from '../../Icon';
import styles from './Button.module.scss';

type ButtonSkin = "primary" | "secondary" | "stroke" | "strokeLight";
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
  icon?: PriorityIcon;
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
    const { skin, width, size, shape, disabled, darkContainer, elevated, icon, children } = this.props;

    const skinClass = skin && styles[skin];
    const widthClass = width && styles[width];
    const shapeClass = shape && styles[shape];
    const sizeClass = size && styles[size];

    const buttonClass = classNames(styles.component,
      this.props.componentClasses,
      skinClass,
      widthClass,
      shapeClass,
      sizeClass, {
        [styles.title]: children,
        [styles.disabled]: disabled,
        [styles.darkContainer]: darkContainer,
        [styles.elevated]: elevated
      });

    return (
      <button className={buttonClass} onClick={this.props.onClick}>
        {icon && <Icon icon={icon} componentClasses={styles.icon} />}
        {this.props.children}
      </button>
    );
  }
}
