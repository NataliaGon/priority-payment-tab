import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../core";

import styles from "./StackPanel.module.scss";


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


    const componentClasses = classNames(styles.component, skinClass);

    return (
      <div className={componentClasses} >
        {this.props.children}
      </div>
    );
  }
}
