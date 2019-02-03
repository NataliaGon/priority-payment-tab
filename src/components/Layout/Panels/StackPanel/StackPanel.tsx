import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  ComponentBase } from "../../../../core";

import styles from "./StackPanel.module.scss";


type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
type StackPanelSkin = "default" | "silver" | "light" | "dark" | "snow";

class StackPanelProperties extends ComponentBaseProperties {
  alignItems?: AlignItems;
  skin?:StackPanelSkin;
}



export class StackPanel extends ComponentBase<StackPanelProperties> {

  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
    }


    const componentClasses = classNames(this.props.componentClasses, styles.component, skinClass);

    return (
      <div className={componentClasses} >
        {this.props.children}
      </div>
    );
  }
}
