import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";
import {Icon}  from "../Icon";
import { Label } from "../Text";

interface TagProperties extends ComponentBaseProperties {
  onClose:Function
}

export function Tag (props:TagProperties) {

    const elementClasses = classNames(styles.component, props.componentClasses);

    return (
      <div className={elementClasses}>
        <Label textColor="white">{props.text}</Label><Icon icon={PriorityIcon.closeSmall} iconColor="white" onClick={()=>{props.onClose()}} />
      </div>
    );
  }

