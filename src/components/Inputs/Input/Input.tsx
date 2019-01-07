import * as React from "react";
import classNames from "classnames";

import {
    ComponentBaseProperties,
    ComponentBaseState,
    ComponentBase,
    PriorityIcon
} from "../../../core";

import { Icon } from "../../Icon/Icon";

import styles from "./Input.module.scss";

type InputSkin ="box" | "line"

class InputProperties extends ComponentBaseProperties {
    inputWidth?: any;
    clearable?: boolean;
    label?: string;
    skin?:InputSkin="box";
}

interface InputState extends ComponentBaseState {
    isFocus?: boolean
}

export class Input extends ComponentBase<
    InputProperties,
    InputState
    > {

    state: InputState = {
        isFocus: false
    }

    handlerFocus = () => {
        this.setState({isFocus:!this.state.isFocus});
    }

    handleOnBlur = () => {
        this.setState({isFocus:!this.state.isFocus });
    }

    public render() {
        const clearIcon = this.props.clearable ? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" /> : '';
        const hasBorder= this.state.isFocus? styles.focusBorder : '';
        const skinClass =(this.props.skin=="line")? styles.line: '';
        const componentClassNames = classNames(styles.component, styles[this.props.inputWidth], hasBorder ,this.props.componentClasses, skinClass);
        const label = this.props.label ? this.props.label : '';

        return (
            <div className={componentClassNames}>
                <input className={styles.input} type="text" onBlur={this.handleOnBlur} onFocus={this.handlerFocus} placeholder={label}  />
                <div className={styles.icon}>
                    {clearIcon}
                </div>
                {this.props.children}
            </div>
        )
    }
}
