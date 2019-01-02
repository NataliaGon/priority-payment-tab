import * as React from "react";
import classNames from 'classnames';
import styles from "./StackPanel.module.scss";
import { Icon } from '../../../Icon/Icon';
import { PriorityIcon } from '../../../../base-classes/PriorityIcon'
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";



type StackPanelDirection = "horizontal";
type StackPanelSkin = "default" | "silver" | "light" | "dark" | "padded-panel";

class StackPanelProperties extends ComponentBaseProperties {
  skin?: StackPanelSkin = "default";
  className?: string

}

interface StackPanelState extends ComponentBaseState {
  isHover?: boolean;
  position?:boolean;
}

export class StackPanel extends ComponentBase<StackPanelProperties, StackPanelState> {
  state: StackPanelState = {
    isHover: false,
    position:false
  }
  HandlerEnter = () => {
    this.setState({ isHover: !this.state.isHover  });
    console.log('hello');
  }
  HandlerMouseLeave = () => {
    this.setState({ isHover: !this.state.isHover });
    console.log('goodbuy');
  }
  public render() {

    let skinClass = "";
    if (this.props.skin) {
      skinClass = styles[this.props.skin];
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, skinClass, this.props.className);

    return (
      <div className={componentClasses} onMouseEnter={this.HandlerEnter}
        onMouseLeave={this.HandlerMouseLeave} >
        <Icon icon={PriorityIcon.closeSmall} visibility={this.state.isHover} position={true}/>
        {this.props.children}
      </div>
    );
  }
}
