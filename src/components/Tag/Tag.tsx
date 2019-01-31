import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";
import {Icon}  from "../Icon";
import { Label } from "../Text";

interface TagProperties extends ComponentBaseProperties {
  onClick:Function
}

export function Tag (props:TagProperties) {

    const elementClasses = classNames(styles.component, props.componentClasses);

    return (
      <div className={elementClasses} onClick={()=>{props.onClick()}}>
        <Label textColor="white">{props.text}</Label><Icon icon={PriorityIcon.closeSmall} iconColor="white" />
      </div>
    );
  }

