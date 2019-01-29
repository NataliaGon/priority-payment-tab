import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../../../core";
import { Icon } from "../../../Icon";
import { Label } from "../../../Text";

import styles from "./OptionItem.module.scss";

interface OptionItemProperties extends ComponentBaseProperties {
  iconName?: string;
  value?: any;
  // displayValue?: boolean;
  onClick?: (e: any) => void;
  isBlue?: boolean;
  width?:any;
  children?:any;
}


export function OptionItem (props:OptionItemProperties){


    const elementClasses = classNames(styles.component, props.componentClasses);

    return (
      <li className={elementClasses} onClick={props.onClick}>
        <Icon icon={PriorityIcon.operatorSearchBetween} iconColor={props.isBlue ? "blue" : "grey"} />
        <Label textColor={props.isBlue ? "blue" : "grey"} skin="regular">{props.children}</Label>
        {/* {this.props.displayValue ? <Label size="small">{this.props.value}</Label> : ""} */}
      </li>
    );
  }

