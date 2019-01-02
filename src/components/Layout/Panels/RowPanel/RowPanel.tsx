import * as React from "react";
import classNames from 'classnames';
import styles from "./RowPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

type AlignItems = "flex-start" | "flex-end" | "space-between";

interface RowPanelProperties extends ComponentBaseProperties {
  alignItems?: AlignItems;
  paddingTop?:boolean;
  paddingBottom?:boolean;
}

interface RowPanelState extends ComponentBaseState {

}

export class RowPanel extends ComponentBase<RowPanelProperties, RowPanelState> {

  public render() {

    let alignItemsClass = "";
    let paddingBottomClass ="";
    let paddingTopClass ="";

    if (this.props.alignItems) {
      alignItemsClass = styles[this.props.alignItems];
    }
    if (this.props.paddingTop) {
      paddingTopClass = styles.topPadding;
    }
    if (this.props.paddingBottom) {
      paddingBottomClass = styles.bottomPadding;
    }
    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass,paddingTopClass, paddingBottomClass);

    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}
