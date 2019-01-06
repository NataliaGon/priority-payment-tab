import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../../core";

import styles from "./StackPanel.module.scss";
import { GlobalStyles } from "../../../../../core/global-styles";

type StackPanelDirection = "horizontal";
type StackPanelSkin = "default" | "silver" | "light" | "dark" | "padded-panel" | "snow";

class StackPanelProperties extends ComponentBaseProperties {
  skin?: StackPanelSkin = "default";
}

interface StackPanelState extends ComponentBaseState {

}

export class StackPanel extends ComponentBase<StackPanelProperties, StackPanelState> {

  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
    }

    let classes: string[] = [];

    if (this.props.componentClasses) {
      this.props.componentClasses.forEach(function (value: string) {
        classes.push(GlobalStyles[value]);
      });
    }

    const componentClasses = classNames(styles.component, skinClass, classes);

    return (
      <div className={componentClasses} >
        {this.props.children}
      </div>
    );
  }
}
