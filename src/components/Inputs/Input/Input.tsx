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
type InputSize = "small" | "medium" | "large";
type InputWidth = "regularFixed" | "fullWidth"

export class InputProperties extends ComponentBaseProperties {
    size?: any;
    width?: InputWidth;
    //label?: string;
    skin?:InputSkin="box";
    value?: string;
    inputRef?(ref): void;
    onChange?(value: string): void;
    onFocus?(event): void;
    onBlur?(event): void;
    placeholder?: string;
}

interface InputState extends ComponentBaseState {
    isFocus?: boolean,
    //value?: string
}

export class Input extends ComponentBase<
    InputProperties,
    InputState
    > {

    static defaultProps = {
        width: "regularFixed"
    }

    constructor(props) {
        super(props);
        this.state={ isFocus: false };
        console.log('constructor')
    }

    // componentDidMount(){
    //     this.textInput.focus();
    // }

    // componentDidUpdate() {
    //     if(this.props.text !== this.state.value) {
    //         this.setState({value : this.props.text});
    //         this.textInput.focus();
    //     }
    // }

    handleChange = (event) => {
        const { onChange } = this.props;
        onChange && onChange(event);
    }

    handlerFocus = (event) => {
        const { onFocus } = this.props;
         console.log('focus')
        this.setState({isFocus: true});
        onFocus && onFocus(event);
    }

    handleOnBlur = (event) => {
        const { onBlur } = this.props;
        console.log('blur')
        this.setState({isFocus: false });
        onBlur && onBlur(event);
    }

    public render() {
        const { onBlur, onFocus, onChange, inputRef, skin, size, width = "fullWidth", children, componentClasses, ...restInputProps } = this.props;

        const hasBorder= this.state.isFocus? styles.focusBorder : '';
        const skinClass =(skin=="line")? styles.line: '';
        const componentClassNames = classNames(styles.component, styles[size],styles[width], hasBorder ,componentClasses, skinClass);


        return (
            <div className={componentClassNames}>
                <input ref={inputRef}
                        className={styles.input}
                        type="text"
                        onBlur={this.handleOnBlur}
                        onFocus={this.handlerFocus}
                        onChange={this.handleChange}
                        {...restInputProps}
                        />
                {children}
            </div>
        )
    }
}
