import * as React from "react";
import classNames from 'classnames';
import styles from "./OptionItem.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
import { Icon } from "../../../Icon";
import { Label } from "../../../Text";
import { PriorityIcon } from "../../../../base-classes/PriorityIcon";

interface OptionItemProperties extends ComponentBaseProperties {
  iconName?: string;
  value?: any;
  displayValue?: boolean;
  onClick?: (e: any) => void;
  isClicked?:boolean;
}

interface OptionItemState extends ComponentBaseState {
  selected?: boolean;
}

export class OptionItem extends ComponentBase<OptionItemProperties, OptionItemState> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <li className={elementClasses} onClick={this.props.onClick}>
        <Icon icon={PriorityIcon.operatorSearchBetween} iconColor={this.props.isClicked ? "blue" : "grey"} />
        <Label textColor={this.props.isClicked ? "blue" : "grey"} skin="regular">{this.props.children}</Label>
        {this.props.displayValue ? <Label skin="small">{this.props.value}</Label> : ""}
      </li>
    );
  }
}
