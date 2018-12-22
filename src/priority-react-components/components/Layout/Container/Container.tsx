import * as React from "react";
import classNames from 'classnames';
import styles from "./Container.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

type AlignItems = "flex-start" | "flex-end" | "space-between";

class ContainerProperties extends ComponentBaseProperties {
  alignItems?: AlignItems = "space-between";
}

interface ContainerState extends ComponentBaseState {

}

export class Container extends ComponentBase<ContainerProperties, ContainerState> {
  public render() {

    const componentClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}
