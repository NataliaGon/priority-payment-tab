import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./icon.module.scss";

type IconSkin = ComponentBaseSkin | "Stroke" | "StrokeIcon";

class IconProperties extends ComponentBaseState {
    skin?: IconSkin = "default";
    onClick?: () => void;
}
interface IconState extends ComponentBaseState {

}
export default class Icon extends ComponentBase<IconProperties, IconState> {

  public render() {
    const skinClass = this.props.skin == "default" ? styles.default : styles.stroke;

    const iconClass = classNames(styles.component,  skinClass)
    return (
      <span className={iconClass} onClick={this.props.onClick}></span>
    );
  }
}
