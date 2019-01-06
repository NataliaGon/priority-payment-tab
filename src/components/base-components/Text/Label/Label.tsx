import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../core";

import styles from "./Label.module.scss";

type LabelSkin = "large" | "regular" | "regular-high-contrast" | "small" | "bold" | "small-bold";
type LabelPadding = "regular" | "double";

interface LabelProperties extends ComponentBaseProperties {
  skin?: LabelSkin;
  labelPadding?: LabelPadding;
  textHref?: string;
}

interface LabelState extends ComponentBaseState {

}

export class Label extends ComponentBase<LabelProperties, LabelState> {
  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
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
      if (this.props.textColor === "white") {
        colorClass = styles.white;
      }
      if (this.props.textColor === "blue") {
        colorClass = styles.blue;
      }
      if (this.props.textColor === "black") {
        colorClass = styles.black;
      }
      if (this.props.textColor === "grey") {
        colorClass = styles.grey;
      }
    }

    const elementClasses = classNames(styles.component, this.props.componentClasses, skinClass, paddingClass, linkClass, colorClass);

    return (
      this.props.textHref ?
        <a className={elementClasses} href={this.props.textHref}>{this.props.text ? this.props.text : this.props.children}</a>
        : <span className={elementClasses}>{this.props.text ? this.props.text : this.props.children}</span>
    );
  }
}
