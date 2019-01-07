import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';



import styles from "./Container.module.scss";

type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
type ContainerWidth = "regular" | "fullWidth" | "";

class ContainerProperties extends ComponentBaseProperties {
  containerWidth?: string;
  alignItems?: AlignItems;

}

interface ContainerState extends ComponentBaseState {
  position?: boolean;
  active?: boolean;
}

export class Container extends ComponentBase<ContainerProperties, ContainerState> {

  state: ContainerState = {
    active: false
  }

 
  ClickHandler = () => {
    this.setState({ active: !this.state.active });
  }
  public render() {

    let alignItemsClass = "";
    let widthClass = "";

    if (this.props.alignItems) {
      alignItemsClass = styles[this.props.alignItems];
    }
    if (this.props.containerWidth) {
      widthClass = styles[this.props.containerWidth];
    }

    const activeClasses = (this.state.active) ? styles.fullWidthActive : '';
    const iconActiveClass = (this.state.active) ? styles.displayBlock : '';

   
    const iconCloseClasses = classNames(styles.closeContainerIcon, iconActiveClass);
    const iconDraggableClasses = classNames(styles.reorderIcon , iconActiveClass);
    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass, widthClass, activeClasses);

    return (
      <div className={componentClasses}  onClick={this.ClickHandler}>
        <Icon icon={PriorityIcon.closeSmall} componentClasses={iconCloseClasses} />
        <Icon icon={PriorityIcon.iconReorder} componentClasses={iconDraggableClasses} iconColor="blue" />
        {this.props.children}
      </div>
    );
  }
}
