import * as React from "react";
import classNames from "classnames";
import styles from "./GeneralInput.module.scss";
import {
    ComponentBaseProperties,
    ComponentBaseState,
    ComponentBase
} from "../../../base-classes";

import { Icon } from "../../Icon/Icon";
import { PriorityIcon } from '../../../base-classes/PriorityIcon';
import {Button} from '../Button/Button';


class GeneralInputProperties extends ComponentBaseProperties {
    inputWidth?: any;
    clearable?:boolean; 
    isIcon?:boolean; 
    isButton?:boolean; 
    iconName?:string;
    defaultVal?:string
}

interface GeneralInputState extends ComponentBaseState {
    isFocus?:boolean
}

export class GeneralInput extends ComponentBase<
    GeneralInputProperties,
    GeneralInputState
    > {

        state:GeneralInputState ={
            
            isFocus:false
        }
          HandlerEnter = () => {
            this.setState({ 

            });
          }
          HandlerMouseLeave = () => {
            this.setState({ 

            });
          }
          HandlerFocus=()=>{
            this.setState({ 

            });
          }
          HandleOnBlur=()=>{
            this.setState({ 

            });
          }
          
    public render() {
        const iconName=this.props.iconName? PriorityIcon[this.props.iconName]: "calendar" ;
        const iconComponent = this.props.clearable? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" />:'';
        const btnComponent = this.props.isButton?<div className={styles.btn}><Button width="small">Add</Button></div>:'';
        const classNamesInput = classNames(styles.input, styles[this.props.inputWidth]);
        const iconOptinal =this.props.isIcon? <div className={styles.iconOptinal} ><Icon icon={iconName} iconColor="grey" /></div>:'';
        const defaultVal = this.props.defaultVal?this.props.defaultVal: "";
        return (
            <div className={styles.component} onMouseEnter={this.HandlerEnter}
            onMouseLeave={this.HandlerMouseLeave} >
                <input className={classNamesInput} type="text" onBlur={this.HandleOnBlur} onFocus={this.HandlerFocus} defaultValue={defaultVal}/>
                <div className={styles.icon}>
                {iconComponent}
              
                </div>
                {btnComponent}
                {iconOptinal}
            </div>)
    }

}