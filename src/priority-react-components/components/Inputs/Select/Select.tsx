import * as React from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import Icon from "../../Icon";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

import OptionItem from "./OptionItem/OptionItem";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";

export interface SelectProperties extends ComponentBaseProperties {
  multiSelect?: boolean;
  IconTextColor?: string;
}

export interface SelectState extends ComponentBaseState {
  dropDownOptions: OptionItem[];
  isOpen: boolean;
  results: string[];
}

export default class Select extends ComponentBase<SelectProperties, SelectState> {

  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  renderOptions = () => {
    const dropDownOptions =
      this.state && this.state.dropDownOptions
        ? this.state.dropDownOptions
        : this.props.children;

  

    if (dropDownOptions && Array.isArray(dropDownOptions)) {
      return (
        <ul className={styles.ul}>
          {dropDownOptions.map((option) => (

            <OptionItem
              iconName={option.iconName}
              value={option.value}
              displayValue={option.displayValue ? true : false}
              key={option.name}
              onClick={e => this.optionSelected()}>
              {option.props.children}
            </OptionItem>
          ))}
        </ul>
      );
    }
  };

  optionSelected() {
    this.dropDownToggle();
  }

  public render() {
    let classForDropDownIcon;
    let IconTextColor;
    let IconOptionsClass;
    if (this.state && this.state.isOpen) {
      IconOptionsClass = styles.active;
      classForDropDownIcon = PriorityIcon.arrowDropUp; //"icon-icon-arrow_drop_up";
      IconTextColor = "grey"
      const IconClasses = classNames(
        classForDropDownIcon,
        IconOptionsClass
      );
    } else {
      classForDropDownIcon = PriorityIcon.arrowDropDown; //"icon-icon-arrow_drop_down";
      IconTextColor = "blue"
    }
    const dropDownVisibilityClass = this.state && this.state.isOpen ? styles.boxShadow : styles.dropDownHide;
    const smallInputVisibilityClass = this.state && this.state.isOpen ? styles.borderColorBlue : '';
    const dropDownOptionsClass = styles.optionsWrapper;
    const smallInputOptionsClass = styles.inputSmall;

    const dropDownOptionsClasses = classNames(
      dropDownVisibilityClass,
      dropDownOptionsClass
    );
    const smallInputOptionsClasses = classNames(
      smallInputVisibilityClass,
      smallInputOptionsClass
    );

    return (
      <div className={styles.containerForDropDown}>
        <div className={styles.dropDownElements}>
          <div className={smallInputOptionsClasses} onClick={this.dropDownToggle}>
            <div className={styles.dropDownIconWrapper}>
              <Icon icon={classForDropDownIcon} />
            </div>
          </div>
          <div className={dropDownOptionsClasses}>{this.renderOptions()}</div>
        </div>
      </div>
    );
  }
}
