import * as React from "react";
import classNames from 'classnames';
import styles from "./DropDownItem.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
import Icon from "../../../Icon";
import Label from "../../../Text/Label";

interface DropDownItemProperties extends ComponentBaseProperties {
  iconName?: string;
  value?: any;
  displayValue?: boolean;
  onClick?: (e: any) => void;
}

interface DropDownItemState extends ComponentBaseState {
  selected?: boolean;
}

export default class DropDownItem extends ComponentBase<DropDownItemProperties, DropDownItemState> {
  public render() {
    
    const elementClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <li className={elementClasses} onClick={this.props.onClick}>
        <Icon fontIconClass="icon-search-between-v4"
        // {this.props.iconName}
         textColor={this.state && this.state.selected ? "blue" : "grey"} />
        <Label skin="regular">{this.props.children}</Label>
        {this.props.displayValue ? <Label skin="small">{this.props.value}</Label> : ""}
      </li>
    );
  }
}
