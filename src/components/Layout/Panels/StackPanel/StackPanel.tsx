import * as React from "react";
import classNames from 'classnames';
import styles from "./StackPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";



type StackPanelDirection = "horizontal";
type StackPanelSkin = "default" | "silver" | "light" | "dark" | "padded-panel";

class StackPanelProperties extends ComponentBaseProperties {
  skin?: StackPanelSkin = "default";
  className?: string
 
}

interface StackPanelState extends ComponentBaseState {

}

export class StackPanel extends ComponentBase<StackPanelProperties, StackPanelState> {
  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, skinClass, this.props.className);

    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}
