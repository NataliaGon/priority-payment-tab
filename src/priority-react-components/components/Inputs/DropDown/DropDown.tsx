import * as React from "react";
import styles from "./DropDown.module.scss";
import classNames from "classnames";
import Icon from "../../Icon";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

import DropDownItem from "./DropDownItem/DropDownItem";

export interface DropDownProperties extends ComponentBaseProperties {
  multiSelect?: boolean;
}

export interface DropDownState extends ComponentBaseState {
  dropDownOptions: DropDownItem[];
  isOpen: boolean;
  results: string[];
}

export default class DropDown extends ComponentBase<
  DropDownProperties,
  DropDownState
> {
  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  renderOptions = () => {
    const dropDownOptions =
      this.state && this.state.dropDownOptions
        ? this.state.dropDownOptions
        : this.props.children;

    console.log(dropDownOptions);

    if (dropDownOptions && Array.isArray(dropDownOptions)) {
      return (
        <ul className={styles.ul}>
          {dropDownOptions.map((option)=> (
          
            <DropDownItem
              iconName={option.iconName}
              value={option.value}
              displayValue={option.displayValue ? true : false}
              key={option.name}
              onClick={e => this.optionSelected()}
            >
              {option.props.children}
            </DropDownItem>
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

    if (this.state && this.state.isOpen) {
      classForDropDownIcon = "icon-icon-arrow_drop_up";
    } else {
      classForDropDownIcon = "icon-icon-arrow_drop_down";
    }
    const dropDownVisibilityClass =
      this.state && this.state.isOpen ? styles.boxShadow : styles.dropDownHide;
    const smallInputVisibilityClass =
      this.state && this.state.isOpen ? styles.borderColorBlue: '';  
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
              <Icon fontIconClass={classForDropDownIcon} />
            </div>
          </div>
          <div className={dropDownOptionsClasses}>{this.renderOptions()}</div>
          {/* <select className={styles.inputBig} /> */}
        </div>
      </div>
    );
  }
}
