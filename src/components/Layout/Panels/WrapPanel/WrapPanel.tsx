import * as React from "react";
import classNames from 'classnames';
import styles from "./WrapPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

type WrapPanelSkin = "default" | "header" | "light" | "dark";
interface WrapPanelProperties extends ComponentBaseProperties {
  skin?: WrapPanelSkin;
}

interface WrapPanelState extends ComponentBaseState {

}

export class WrapPanel extends ComponentBase<WrapPanelProperties, WrapPanelState> {
  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, skinClass);

    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}
