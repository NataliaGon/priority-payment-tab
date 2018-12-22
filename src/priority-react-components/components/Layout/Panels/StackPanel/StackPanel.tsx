import * as React from "react";
import classNames from 'classnames';
import styles from "./StackPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";


interface StackPanelProperties extends ComponentBaseProperties {
}

interface StackPanelState extends ComponentBaseState {

}

export class StackPanel extends ComponentBase<StackPanelProperties, StackPanelState> {
  public render() {

    const componentClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}
