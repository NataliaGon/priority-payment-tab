import * as React from "react";
import classNames from 'classnames';
import styles from "./RowPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

interface RowPanelProperties extends ComponentBaseProperties {
}

interface RowPanelState extends ComponentBaseState {

}

export class RowPanel extends ComponentBase<RowPanelProperties, RowPanelState> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}
