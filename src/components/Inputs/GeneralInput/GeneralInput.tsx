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
        this.setState({

        });
    }

    HandleOnBlur = () => {
        this.setState({

        });
    }

    public render() {
        const clearIcon = this.props.clearable ? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" /> : '';
        const inputClassNames = classNames(styles.component, styles[this.props.inputWidth], this.props.componentClasses);
        const label = this.props.label ? this.props.label : '';

        return (
            <div className={styles.component} onMouseEnter={this.HandlerEnter}
                onMouseLeave={this.HandlerMouseLeave} >
                <input className={inputClassNames} type="text" onBlur={this.HandleOnBlur} onFocus={this.HandlerFocus} defaultValue={label} />
                <div className={styles.icon}>
                    {clearIcon}
                </div>
                {this.props.children}
            </div>
        )
    }
}
