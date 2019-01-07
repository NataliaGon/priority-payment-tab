import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';



import styles from "./Container.module.scss";

type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
type ContainerWidth = "regular" | "fullWidth" | "";

class ContainerProperties extends ComponentBaseProperties {
  containerWidth?: ContainerWidth;
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


    let classNames = require('classnames/bind');
    let cx = classNames.bind(styles);
    const componentClassNames = cx('component', {'fullWidthActive':this.state.active}, this.props.alignItems, this.props.containerWidth);
    const iconCloseClassNames =cx('closeContainerIcon', {'displayBlock':this.state.active});
    const iconDraggableClassNames =cx('dragIcon', {'displayBlock':this.state.active});
   

    return (
      <div className={componentClassNames}  onClick={this.ClickHandler}>
        <Icon icon={PriorityIcon.closeSmall} componentClasses={iconCloseClassNames} />
        <Icon icon={PriorityIcon.iconReorder} componentClasses={iconDraggableClassNames} iconColor="blue" />
        {this.props.children}
      </div>
    );
  }
}
