import * as React from "react";
import classNames from 'classnames';
import styles from "./WrapPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";


interface WrapPanelProperties extends ComponentBaseProperties {
}

interface WrapPanelState extends ComponentBaseState {

}

export class WrapPanel extends ComponentBase<WrapPanelProperties, WrapPanelState> {
  public render() {

    const componentClasses = classNames(styles.component, this.props.componentClasses);
    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}
