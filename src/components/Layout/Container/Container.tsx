import * as React from "react";
import { ComponentBaseProperties,  ComponentBase, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';
import { Draggable } from '../Draggable/Draggable';
import styles from "./Container.module.scss";


type ContainerPanelSkin = "default" | "silver" | "light" | "dark" | "snow";


class ContainerProperties extends ComponentBaseProperties {
  skin?: ContainerPanelSkin;
  roundConer?: boolean;
  disabled?: boolean;
  activeHover?: boolean;
  activeClick?: boolean;
  onClose?: () => void;
  closeClick?:Function;
}



export class Container extends ComponentBase<ContainerProperties> {

 
  clickHandler = () => {
    
  }
  hoverHandler = () => {
   
  }
  closeClick=()=>{
    this.props.closeClick&&this.props.closeClick()
  }
  public render() {
    let classNames = require('classnames/bind');
    let cx = classNames.bind(styles);
    const componentClassNames = cx('component', { 'active': this.props.activeClick || this.props.activeHover }, { 'roundConer': this.props.roundConer });
    const iconCloseClassNames = cx('closeContainerIcon', { 'displayBlock': this.props.activeClick || this.props.activeHover});

    return (
      <div className={componentClassNames} onClick={()=>{this.clickHandler()}} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
        <Icon icon={PriorityIcon.closeSmall} componentClasses={iconCloseClassNames} onClick={()=>{this.closeClick()}}/>
        <Draggable activeHover={this.props.activeHover} activeClick={this.props.activeClick} />
        {this.props.children}
      </div>
    );
  }
}
