import * as React from "react";
import classNames from "classnames";

import {
  ComponentBaseProperties,
  ComponentBase,
  PriorityIcon
} from "../../../core";

import styles from "./Label.module.scss";
import { Icon } from "../../Icon";
import IconCounter from "../../Icon/IconCounter/IconCounter";

type LabelSkin =
  | "large"
  | "regular"
  | "regular-hight-contrast"
  | "small"
  | "bold"
  | "small-bold";

interface LabelProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconCounter?: number;
  skin?: LabelSkin;
  textHref?: string;
}

export class Label extends ComponentBase<LabelProperties> {
  private renderIcon() {
    if (this.props.icon) {
      return (
        <Icon icon={this.props.icon} counterValue={this.props.iconCounter} />
      );
    }
    return "";
  }

  private renderLabelText() {
    const elementClasses = classNames({ href: this.props.textHref });
    return this.props.textHref ? (
      <a className={elementClasses} href={this.props.textHref}>
        {this.props.text ? this.props.text : this.props.children}
      </a>
    ) : (
        <span>{this.props.text ? this.props.text : this.props.children}</span>
      );
  }
  public render() {
    let classNames = require("classnames/bind");
    let cx = classNames.bind(styles);
    const elementClasses = cx(
      "component",
      this.props.skin,
      this.props.textColor
    );

    return (
      <div className={elementClasses}>
        {this.renderLabelText()} {this.renderIcon()}
      </div>
    );
  }
}
