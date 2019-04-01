import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";
import {Icon}  from "../Icon";
import { Label } from "../Text";

interface TagProperties extends ComponentBaseProperties {
  onClose?(): void;
  active?: boolean;
  children?: any;
}


export function Tag ({onClose, active = true, componentClasses, text, children}: TagProperties) {

    const elementClasses = classNames(styles.component, componentClasses, {[styles.active]: active});

    return (
      <div className={elementClasses}>
        {
          text && <Label textColor="white">{text}</Label>
        }
        {children}
        {
          onClose && <Icon icon={PriorityIcon.closeSmall} iconColor="white" onClick={onClose} />
        }
      </div>
    );
  }

