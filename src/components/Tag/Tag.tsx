import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../core";
import { Icon } from "../Icon";
import { Label } from "../Text";

interface TagProperties extends ComponentBaseProperties {
}

interface TagState extends ComponentBaseState {

}

export class Tag extends ComponentBase<TagProperties, TagState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <div className={elementClasses}>
        <Label textColor="white">{this.props.text}</Label><Icon icon={PriorityIcon.closeSmall} iconColor="white" />
      </div>
    );
  }
}
