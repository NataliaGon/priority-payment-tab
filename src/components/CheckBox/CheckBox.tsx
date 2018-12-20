import * as React from "react";
import classNames from 'classnames';
import styles from "./CheckBox.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";

interface CheckBoxProperties extends ComponentBaseProperties {
  textHref?: string;
  skin?: string;
}

export default class CheckBox extends ComponentBase<CheckBoxProperties, any> {
  public render() {
    const elementClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    const checkBoxElementClasses = classNames(styles.checkBoxElement);

    const textElementClasses = classNames(styles.textElement);
    return (
      <div className={elementClasses}>
        <div className={checkBoxElementClasses}></div>
        {this.props.textHref ? <div className={textElementClasses}>{this.props.text}</div> : <a className={textElementClasses} href={this.props.textHref}>{this.props.text}</a>}
      </div>
    );
  }
}
