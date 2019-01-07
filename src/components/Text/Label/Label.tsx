import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../core";

import styles from "./Label.module.scss";

type LabelSize = "large" | "regular" | "regular-high-contrast" | "small" | "bold" | "small-bold";


interface LabelProperties extends ComponentBaseProperties {
  size?: LabelSize;
  textHref?: string;
}

interface LabelState extends ComponentBaseState {

}

export class Label extends ComponentBase<LabelProperties, LabelState> {
  public render() {


    let classNames = require('classnames/bind');
    let cx = classNames.bind(styles);
    const elementClasses = cx('component',this.props.size, this.props.textColor, {'href':this.props.textHref});
    
    return (
      this.props.textHref ?
        <a className={elementClasses} href={this.props.textHref}>{this.props.text ? this.props.text : this.props.children}</a>
        : <span className={elementClasses}>{this.props.text ? this.props.text : this.props.children}</span>
    );
  }
}
