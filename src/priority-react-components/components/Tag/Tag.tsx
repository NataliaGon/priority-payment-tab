import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import Icon from "../Icon";
import Label from "../Text/Label";

interface TagProperties extends ComponentBaseProperties {
}

interface TagState extends ComponentBaseState {

}

export default class Tag extends ComponentBase<TagProperties, TagState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <div className={elementClasses}>
        <Label textColor="white">{this.props.text}</Label><Icon fontIconClass="icon-icon-close-small" textColor="white" />
      </div>
    );
  }
}
