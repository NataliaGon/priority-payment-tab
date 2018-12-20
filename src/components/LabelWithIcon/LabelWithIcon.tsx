import * as React from "react";
import classNames from 'classnames';
import styles from "./LabelWithIcon.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";
import SystemTextSize from "../../constants/systemTextSize";
import { HorizontalContentAlign } from "../../constants/contentAlign";

interface LabelWithIconProperties extends ComponentBaseProperties {
  iconClassName?: string;
  badgeCounter?: string;
  text?: string;
  textSize?: SystemTextSize;
  contentAlign?: HorizontalContentAlign;
  textHref?: string;
}

export default class LabelWithIcon extends ComponentBase<LabelWithIconProperties, any> {
  public render() {
    const contentAlignClass = (this.props.contentAlign && this.props.contentAlign == HorizontalContentAlign.left) ? styles.left : styles.right;
    const elementClasses = classNames(styles.component, contentAlignClass, this.props.componentClasses);
    const iconElementClasses = classNames(styles.iconElement, this.props.iconClassName);

    let textSizeClass = '';
    if (this.props.textSize) {
      textSizeClass = styles[this.props.textSize];
    }

    const textElementClasses = classNames(styles.textElement, textSizeClass);
    return (
      <div className={elementClasses}>
        <div className={iconElementClasses}></div>
        {this.props.textHref ? <div className={textElementClasses}>{this.props.text}</div> : <a className={textElementClasses} href={this.props.textHref}>{this.props.text}</a>}
      </div>
    );
  }
}
