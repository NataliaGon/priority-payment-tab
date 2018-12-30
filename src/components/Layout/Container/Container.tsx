import * as React from "react";
import classNames from 'classnames';
import styles from "./Container.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";

class ContainerProperties extends ComponentBaseProperties {
  width?: string;
  alignItems?: AlignItems;
}

interface ContainerState extends ComponentBaseState {

}

export class Container extends ComponentBase<ContainerProperties, ContainerState> {
  public render() {

    let alignItemsClass = "";

    if (this.props.alignItems) {
      alignItemsClass = styles[this.props.alignItems];
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass);

    let inlineStyle = {};
    if (this.props.width) {
      inlineStyle = { width: this.props.width }
    }
    return (
      <div className={componentClasses} style={inlineStyle}>{this.props.children}</div>
    );
  }
}
