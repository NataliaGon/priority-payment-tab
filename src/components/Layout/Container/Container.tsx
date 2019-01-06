import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';

import { GlobalStyles } from '../../../core/global-styles';

import styles from "./Container.module.scss";

type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
type ContainerWidth = "regular" | "fullWidth" | "";

class ContainerProperties extends ComponentBaseProperties {
  ContainerWidth?: string;
  alignItems?: AlignItems;
  closable?: boolean;
  onClick?: () => void;
}

interface ContainerState extends ComponentBaseState {
  hovered?: boolean;
  position?: boolean;
  closable?:boolean;
  draggable?:boolean;
  active?:boolean;
}

export class Container extends ComponentBase<ContainerProperties, ContainerState> {

  state: ContainerState = {
    hovered: false,
    closable:false,
    draggable:false,
    active:false
  }

  static defaultProps = {
    closable: false
  };

  HandlerEnter = () => {
    this.setState({ hovered: !this.state.hovered });
  }

  HandlerMouseLeave = () => {
    this.setState({ hovered: !this.state.hovered });
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
    if (this.props.ContainerWidth) {
      widthClass = styles[this.props.ContainerWidth];
    }

    let icon: any = "";
    let reorderIcon: any = "";
   
    const activeClasses=(this.state.active)? styles.fullWidthActive : '';

    if (this.props.closable) {
      icon = <Icon icon={PriorityIcon.closeSmall} visible={this.state.hovered} componentClasses={[styles["closeContainerIcon"]]} />
    }

    if (this.props.draggable) {
      reorderIcon =
        <div className={styles["reorderIcon"]}>
          <Icon icon={PriorityIcon.iconReorder} iconColor="blue" />
        </div>
    }
    

    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass, widthClass, activeClasses);

    return (
      <div className={componentClasses} onMouseEnter={this.HandlerEnter}
        onMouseLeave={this.HandlerMouseLeave}    onClick={this.ClickHandler}>
        {icon}
        {reorderIcon}
        {this.props.children}
     
        </div>
    );
  }
}
