import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  ComponentBase } from "../../../../core";

import styles from "./WrapPanel.module.scss";

interface WrapPanelProperties extends ComponentBaseProperties {

}



export class WrapPanel extends ComponentBase<WrapPanelProperties> {
  public render() {
    const componentClass = classNames(styles.component,this.props.componentClasses)
    return (
      <div className={componentClass} >{this.props.children}</div>
    );
  }
}
