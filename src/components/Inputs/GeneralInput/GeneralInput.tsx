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
    
}

interface GeneralInputState extends ComponentBaseState {
    isButton?:boolean;
    isFocus?:boolean
}

export class GeneralInput extends ComponentBase<
    GeneralInputProperties,
    GeneralInputState
    > {

        state:GeneralInputState ={
            isButton:false,
            isFocus:false
        }
          HandlerEnter = () => {
            this.setState({ isButton: !this.state.isButton  });
          }
          HandlerMouseLeave = () => {
            this.setState({ isButton: !this.state.isButton });
          }
          HandlerFocus=()=>{
            this.setState({ isFocus: !this.state.isFocus });
          }
          HandleOnBlur=()=>{
            this.setState({ isFocus: !this.state.isFocus });
          }
          
    public render() {
       
        const iconComponent = this.props.clearable? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" />:'';
        const btnComponent = this.state.isButton?<div className={styles.btn}><Button width="small">Add</Button></div>:'';
        const classNamesInput = classNames(styles.input, styles[this.props.inputWidth]);
        const iconOptinal =this.state.isFocus? <div className={styles.iconOptinal} ><Icon icon={PriorityIcon.done} iconColor="grey" /></div>:'';
        return (
            <div className={styles.component} onMouseEnter={this.HandlerEnter}
            onMouseLeave={this.HandlerMouseLeave} >
                <input className={classNamesInput} type="text" onBlur={this.HandleOnBlur} onFocus={this.HandlerFocus}/>
                <div className={styles.icon}>
                {iconComponent}
              
                </div>
                {btnComponent}
                {iconOptinal}
            </div>)
    }

}