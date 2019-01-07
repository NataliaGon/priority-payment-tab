import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../core";

import styles from "./Label.module.scss";

type LabelSize = "large" | "regular" | "regular-high-contrast" | "small" | "bold" | "small-bold";
type LabelPadding = "regular" | "double";

interface LabelProperties extends ComponentBaseProperties {
  size?: LabelSize;
  labelPadding?: LabelPadding;
  textHref?: string;
}

interface LabelState extends ComponentBaseState {

}

export class Label extends ComponentBase<LabelProperties, LabelState> {
  public render() {

    let sizeClass = "";
    if (this.props.size) {
      sizeClass = styles[this.props.size];
    }

    let paddingClass = "";
    if (this.props.labelPadding) {
      paddingClass = styles["padding-" + this.props.labelPadding];
    }

    let linkClass = "";
    if (this.props.textHref) {
      linkClass = styles.href;
    }

    let colorClass = "grey";

    if (this.props.textColor) {

        colorClass = styles[this.props.textColor];
    
    }

    const elementClasses = classNames(styles.component, this.props.componentClasses, sizeClass, paddingClass, linkClass, colorClass);

    return (
      this.props.textHref ?
        <a className={elementClasses} href={this.props.textHref}>{this.props.text ? this.props.text : this.props.children}</a>
        : <span className={elementClasses}>{this.props.text ? this.props.text : this.props.children}</span>
    );
  }
}
