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
  | "small"
  | "bold"
  | "underline"
  | "small-bold";

interface LabelProperties extends ComponentBaseProperties {
  icon?: PriorityIcon;
  iconCounter?: number;
  skin?: LabelSkin;
  prefixPadding?: boolean;
  suffixPadding?: boolean;
  textHref?: string;
  onClick?(): void;
}

export class Label extends ComponentBase<LabelProperties> {
  private renderIcon() {
    if (this.props.icon) {
      return (
        <Icon icon={this.props.icon} componentClasses={styles.icon} counterValue={this.props.iconCounter} />
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
        this.props.text ? this.props.text : this.props.children
      );
  }
  public render() {
    let classNames = require("classnames/bind");
    let cx = classNames.bind(styles);
    const elementClasses = cx(
      "component",
      this.props.componentClasses,
      this.props.skin,
      this.props.textColor,
      {
        clickable: this.props.onClick,
        prefixPadding: this.props.prefixPadding,
        suffixPadding: this.props.suffixPadding
      }
    );

    return (
      <div className={elementClasses} onClick={this.props.onClick}>
        {this.renderIcon()} {this.renderLabelText()} 
      </div>
    );
  }
}
