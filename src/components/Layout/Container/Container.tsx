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
  active?: boolean;
  onClose?: () => void;
  tabIndex?: number;
  containerRef?: any;
}



export class Container extends ComponentBase<ContainerProperties> {

  public render() {
    let classNames = require('classnames/bind');
    let cx = classNames.bind(styles);
    const componentClassNames = cx('component', { 
      'active': this.props.active,
      'roundConer': this.props.roundConer
  },
  this.props.componentClasses);
    const iconCloseClassNames = cx('closeContainerIcon', { 'displayBlock': this.props.active});

    return (
      <div className={componentClassNames}
           ref={this.props.containerRef}
           tabIndex={this.props.tabIndex}
          >
          { this.props.onClose && <Icon icon={PriorityIcon.closeSmall} componentClasses={iconCloseClassNames} onClick={this.props.onClose}/>}
        {this.props.children}
      </div>
    );
  }
}
