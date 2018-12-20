import * as React from "react";
import classNames from 'classnames';
import styles from "./Label.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";

interface LabelProperties extends ComponentBaseProperties {
  textHref?: string;
  skin?: string;
}

export default class Label extends ComponentBase<LabelProperties, any> {
  public render() {
    const elementClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);


    let textSizeClass = '';
    if (this.props.text) {
      textSizeClass = styles[this.props.text];
    }
    const textElementClasses = classNames(styles.textElement, textSizeClass);
    return (
      <div className={elementClasses}>
        {this.props.textHref ? <div className={textElementClasses}>{this.props.text}</div> : <a className={textElementClasses} href={this.props.textHref}>{this.props.text}</a>}
      </div>
    );
  }
}
