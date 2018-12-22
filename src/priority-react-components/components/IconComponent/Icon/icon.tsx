import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./icon.module.scss";



class IconProperties extends ComponentBaseState {
  skin?: string;
  fontIconClass?: string;
  onClick?: () => void;
}
interface IconState extends ComponentBaseState {

}
export default class Icon extends ComponentBase<IconProperties, IconState> {

  public render() {
    const iconClass = classNames(styles.component, this.props.fontIconClass)
    return (
      <span className={iconClass} onClick={this.props.onClick}></span>
    );
  }
}
