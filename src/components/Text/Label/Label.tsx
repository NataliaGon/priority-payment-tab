import * as React from "react";
import classNames from 'classnames';
import styles from "./Label.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

type LabelSkin = "large" | "regular" | "regular-high-contrast" | "small";
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

    let colorClass = "";
    if (this.props.textColor) {
      colorClass = "text-color-" + this.props.textColor;
    }

    const elementClasses = classNames(styles.component, this.props.componentClasses, skinClass, paddingClass, linkClass, colorClass);

    return (
      this.props.textHref ?
        <a className={elementClasses} href={this.props.textHref}>{this.props.text ? this.props.text : this.props.children}</a>
        : <span className={elementClasses}>{this.props.text ? this.props.text : this.props.children}</span>
    );
  }
}