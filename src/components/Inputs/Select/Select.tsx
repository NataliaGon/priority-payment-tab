import * as React from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import { Icon } from "../../Icon";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

import { OptionItem } from "./OptionItem/OptionItem";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";

type selectWidth ="small"|"medium"|"large";

export interface SelectProperties extends ComponentBaseProperties {
  multiSelect?: boolean;
  IconTextColor?: string;
  options: any[];
  width?:selectWidth;
}

export interface SelectState extends ComponentBaseState {
  isOpen: boolean;
  results: string[];
}

export class Select extends ComponentBase<SelectProperties, SelectState> {

  state: SelectState = {
    isOpen: false,
    results: []
  };

  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  renderOptions = () => {
    const [firstElem, ...restElems] = this.props.options;

    if (this.props.options && Array.isArray(this.props.options)) {
      return (
        <ul className={styles.ul}>
          <OptionItem
            iconName={firstElem.iconName}
            isClicked={this.state.isOpen}
          >
            {firstElem.name}
          </OptionItem>
          {restElems.map(option => (
            <OptionItem
              iconName={option.iconName}
            >
              {option.name}
            </OptionItem>
          ))}
        </ul>
      );
    }else{
      return null
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
    const sizeSelectClass= this.props.width?styles[this.props.width]:styles["medium"];
    const dropDownOptionsClasses = classNames(
      dropDownVisibilityClass,
      dropDownOptionsClass,
      sizeSelectClass
    );
    const smallInputOptionsClasses = classNames(
      smallInputVisibilityClass,
      smallInputOptionsClass,
      sizeSelectClass
    );
   const dropDownElementsStyles=classNames(
    styles.dropDownElements,sizeSelectClass
   );
   
    return (
     
        <div className={dropDownElementsStyles}>
          <div
            className={smallInputOptionsClasses}
            onClick={this.dropDownToggle}
          >
            <div className={styles.dropDownIconWrapper}>
              <Icon iconColor={this.state.isOpen? "blue":"grey" } icon={classForDropDownIcon} />
            </div>
          </div>
          <div className={dropDownOptionsClasses}>{this.renderOptions()}</div>
        </div>
    
    );
  }
}
