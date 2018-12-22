import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./icon.module.scss";
import IconCounter from "../IconCounter/iconCounter";



class IconProperties extends ComponentBaseState {
  skin?: string;
  fontIconClass?: string;
  onClick?: () => void;
}
interface IconState extends ComponentBaseState {

}
export default class Icon extends ComponentBase<IconProperties, IconState> {

state={
  isCounter: true
}

  public render() {
    const iconClass = classNames(styles.component, this.props.fontIconClass)
    let iconHTML;

    if (this.state.isCounter){
      iconHTML = 
      <div className={iconClass} onClick={this.props.onClick}>
     <IconCounter/>
      </div>
  
    } else{
      iconHTML =  <span className={iconClass} onClick={this.props.onClick}></span>;
    }
    return (
      <div>
      {iconHTML}
      </div>
    );
  }
}
