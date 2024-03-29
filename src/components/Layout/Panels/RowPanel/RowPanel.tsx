import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBase } from "../../../../core";

import styles from "./RowPanel.module.scss";

type AlignItems = "flex-start" | "flex-end" | "center";

interface RowPanelProperties extends ComponentBaseProperties {
  alignItems?: AlignItems;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}



export class RowPanel extends ComponentBase<RowPanelProperties> {

  public render() {

    let alignItemsClass = "";
    let paddingBottomClass = "";
    let paddingTopClass = "";

    if (this.props.alignItems) {
      alignItemsClass = styles[this.props.alignItems];
    }

    if (this.props.paddingTop) {
      paddingTopClass = styles.topPadding;
    }

    if (this.props.paddingBottom) {
      paddingBottomClass = styles.bottomPadding;
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass, paddingTopClass, paddingBottomClass);

    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}
