import * as React from "react";
import classNames from 'classnames';
import styles from "./Container.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
import { Icon } from '../../Icon/Icon';
import { PriorityIcon } from '../../../base-classes/PriorityIcon';

type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
type ContainerWidth = "regular" | "fullWidth" | "";

class ContainerProperties extends ComponentBaseProperties {
  ContainerWidth?: string;
  alignItems?: AlignItems;
  iconShow?:boolean;
  iconReorder?:boolean;
}

interface ContainerState extends ComponentBaseState {
  isHover?: boolean;
  position?:boolean;
}

export class Container extends ComponentBase<ContainerProperties, ContainerState> {

state:ContainerState={
  isHover:false
}
static defaultProps = {
  iconShow: false

};

  HandlerEnter = () => {
    this.setState({ isHover: !this.state.isHover  });
  }
  HandlerMouseLeave = () => {
    this.setState({ isHover: !this.state.isHover });
  }
  
  public render() {

    let alignItemsClass = "";
    let widthItemsClass="";

    if (this.props.alignItems) {
      alignItemsClass = styles[this.props.alignItems];
    }
    if (this.props.ContainerWidth) {
      widthItemsClass = styles[this.props.ContainerWidth];
    }
    
    let icon:any="";
    let iconReord:any="";
    if (this.props.iconShow){
      icon=<Icon icon={PriorityIcon.closeSmall} visibility={this.state.isHover} position={true}/>
    }
    if (this.props.iconReorder){
      iconReord=
      <div className={styles.iconReorder}>
      <Icon icon={PriorityIcon.iconReorder}/>
      </div>
    }
    const componentClasses = classNames(styles.component, this.props.componentClasses, alignItemsClass,widthItemsClass);

    let inlineStyle = {};

  
    return (
      <div className={componentClasses} style={inlineStyle} onMouseEnter={this.HandlerEnter}
      onMouseLeave={this.HandlerMouseLeave}>
      {icon}
      {iconReord}
      {this.props.children}</div>
    );
  }
}
