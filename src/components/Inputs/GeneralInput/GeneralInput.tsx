import * as React from "react";
import classNames from "classnames";

import {
    ComponentBaseProperties,
    ComponentBaseState,
    ComponentBase,
    PriorityIcon
} from "../../../core";

import { Icon } from "../../Icon/Icon";

import styles from "./GeneralInput.module.scss";


class GeneralInputProperties extends ComponentBaseProperties {
    inputWidth?: any;
    clearable?: boolean;
    label?: string
}

interface GeneralInputState extends ComponentBaseState {
    isFocus?: boolean
}

export class GeneralInput extends ComponentBase<
    GeneralInputProperties,
    GeneralInputState
    > {

    state: GeneralInputState = {
        isFocus: false
    }

    HandlerEnter = () => {
        this.setState({

        });
    }

    HandlerMouseLeave = () => {
        this.setState({

        });
    }

    HandlerFocus = () => {
        this.setState({isFocus:!this.state.isFocus});
    }

    HandleOnBlur = () => {
        this.setState({isFocus:!this.state.isFocus });
    }

    public render() {
        const clearIcon = this.props.clearable ? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" /> : '';
        const hasBorder= this.state.isFocus? styles.focusBorder : '';
        const componentClassNames = classNames(styles.component, styles[this.props.inputWidth], hasBorder ,this.props.componentClasses);
        const label = this.props.label ? this.props.label : '';

        return (
            <div className={componentClassNames} onMouseEnter={this.HandlerEnter}
                onMouseLeave={this.HandlerMouseLeave} >
                <input className={styles.input} type="text" onBlur={this.HandleOnBlur} onFocus={this.HandlerFocus} placeholder={label}  />
                <div className={styles.icon}>
                    {clearIcon}
                </div>
                {this.props.children}
            </div>
        )
    }
}
