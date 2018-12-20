import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";
import SystemTextSize from "../../constants/systemTextSize";
import { HorizontalContentAlign } from "../../constants/contentAlign";
import SystemColor from "../../constants/systemColors";

interface CheckBoxProperties extends ComponentBaseProperties {
  labelText?: string;
  labelColor?: SystemColor;
  textSize?: SystemTextSize;
  contentAlign?: HorizontalContentAlign;
  textHref?: string;
}

export default class CheckBox extends ComponentBase<CheckBoxProperties, any> {
  public render() {
    const contentAlignClass = (this.props.contentAlign && this.props.contentAlign == HorizontalContentAlign.left) ? styles.left : styles.right;
    const elementClasses = classNames(styles.component, contentAlignClass, this.props.componentClasses);
    const checkBoxElementClasses = classNames(styles.checkBoxElement);

    let textSizeClass = '';
    if (this.props.textSize) {
      textSizeClass = styles[this.props.textSize];
    }
    const textElementClasses = classNames(styles.textElement, textSizeClass);
    return (
      <div className={elementClasses}>
        <div className={checkBoxElementClasses}></div>
        {this.props.textHref ? <div className={textElementClasses}>{this.props.labelText}</div> : <a className={textElementClasses} href={this.props.textHref}>{this.props.labelText}</a>}
      </div>
    );
  }
}
