import * as React from "react";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";

import styles from "./Button.module.scss";

type ButtonSkin = "regular" | "stroke" | "roundStrokeIcon" | "secondary" |"strokeActive";
type ButtonWidth = "regularFixed" | "fullWidth" | "ccontentWidth" | "small";

interface ButtonProperties extends ComponentBaseProperties {
  skin?: ButtonSkin;
  width?: ButtonWidth;
  
}

interface ButtonState extends ComponentBaseState {
isActive?:boolean;
}

export class Button extends ComponentBase<ButtonProperties, ButtonState> {

state:ButtonState={
  isActive:false
}
clickHandler=()=>{
  this.setState({isActive:!this.state.isActive});
}
  public render() {
    const skinClass = styles[this.props.skin ? this.props.skin : ""];
    const widthClass = styles[this.props.width ? this.props.width : ""];
    const darkThemeClass = styles.darkTheme;
    const activeBtnStyles = this.state.isActive? styles[this.props.skin  + 'Active'] : "";
    
   
   let buttonClass="";
    if (this.state.isActive){
      buttonClass = classNames(styles.component,  widthClass, skinClass, activeBtnStyles, darkThemeClass);
    }else{
      buttonClass = classNames(styles.component, skinClass, widthClass, darkThemeClass);
    }
     

    return (
      <button className={buttonClass} onClick={this.clickHandler}>{this.props.children}</button>
    );
  }
}
