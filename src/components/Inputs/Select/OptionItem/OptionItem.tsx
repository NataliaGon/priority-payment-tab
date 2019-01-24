import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../../../core";
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
}

interface OptionItemState extends ComponentBaseState {
  selected?: boolean;
}

export class OptionItem extends ComponentBase<OptionItemProperties, OptionItemState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <li className={elementClasses} onClick={this.props.onClick}>
        <Icon icon={PriorityIcon.operatorSearchBetween} iconColor={this.props.isBlue ? "blue" : "grey"} />
        <Label textColor={this.props.isBlue ? "blue" : "grey"} skin="regular">{this.props.children}</Label>
        {/* {this.props.displayValue ? <Label size="small">{this.props.value}</Label> : ""} */}
      </li>
    );
  }
}
