import * as React from "react";

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase,
  PriorityIcon
} from "../../../core";

import { Icon } from "../../Icon";
import { OptionItem } from "../Select/OptionItem/OptionItem";

import styles from "./Select.module.scss";

type selectWidth = "small" | "medium" | "large";

export interface SelectProperties extends ComponentBaseProperties {
  multiSelect?: boolean;
  IconTextColor?: string;
  options: any[];
  width?: selectWidth
  isBlue?: boolean;
  onMouse?:(e:any)=>void;
}

export interface SelectState extends ComponentBaseState {
  isOpen: boolean;
  results: string[];
  
}

export class Select extends ComponentBase<SelectProperties, SelectState> {

  static defaultProps = {
    width: "medium"
  }
  state: SelectState = {
    isOpen: false,
    results: []
  };
  mouseOut=()=>{
    console.log('out');
    if (this.state.isOpen){
    this.dropDownToggle();
    }
  }

  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  firstBlockRender = (firstElem) => {
    return (
    <React.Fragment>
      <OptionItem
        iconName={firstElem.iconName}
        isBlue={this.props.isBlue}
      >
        {firstElem.name}
      </OptionItem>
    </React.Fragment>)
  }
  secondBlockRender = (restElems) => {
    return (restElems.map(option => (
      <React.Fragment>
        <OptionItem
          iconName={option.iconName}
        >
          {option.name}
        </OptionItem>
      </React.Fragment>
    )))
  }

  optionSelected() {
    this.dropDownToggle();
  }

  public render() {
   
    const classForDropDownIcon = this.state && this.state.isOpen ? PriorityIcon.arrowDropUp : PriorityIcon.arrowDropDown;
    const [firstElem, ...restElems] = this.props.options;
    let classNames = require('classnames/bind');
    let cx = classNames.bind(styles);
    const allOptionsBlock = cx('allOptionsBlock', this.props.width, {'display':this.state.isOpen});
    const inputClasses = cx({'borderColorBlue':this.state.isOpen},this.props.width, 'input');
    const firstOptionBlock = cx('firstOptionBlock',this.props.width,{'firstOptionBlockActive':this.state.isOpen});
    const componentStyles=cx('component',this.props.width);
    return (
      <div className={componentStyles} onMouseLeave={this.mouseOut}  onMouseOut={this.props.onMouse} onMouseOver={this.props.onMouse}>
        <div className={inputClasses} onClick={this.dropDownToggle}>
          <div className={styles.dropDownIconWrapper}>
            <Icon iconColor={this.state.isOpen ? "blue" : "grey"} icon={classForDropDownIcon} />
          </div>
        </div>
        <ul className={firstOptionBlock}>
          {this.firstBlockRender(firstElem)}
        </ul>
        <ul className={allOptionsBlock}>
          {this.secondBlockRender(restElems)}
        </ul>
      </div>
    );
  }
}
