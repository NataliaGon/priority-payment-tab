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
type InputSize = "small" | "medium" | "large"

class InputProperties extends ComponentBaseProperties {
    size?: any;
    label?: string;
    skin?:InputSkin="box";
    onChange?:(value: string) => void
}

interface InputState extends ComponentBaseState {
    isFocus?: boolean,
    value?: string
}

export class Input extends ComponentBase<
    InputProperties,
    InputState
    > {

    state: InputState = {
        isFocus: false,
        value: ""
    }

    textInput;
    constructor(props) {
        super(props);
        this.state={ isFocus: false, value: this.props.text};
    }

    componentDidMount(){
        this.textInput.focus();
    }

    componentDidUpdate() {
        if(this.props.text !== this.state.value) {
            this.setState({value : this.props.text});
            this.textInput.focus();
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onChange && this.props.onChange(event.target.value);
    }

    handlerFocus = () => {
        this.setState({isFocus:!this.state.isFocus});
    }

    handleOnBlur = () => {
        this.setState({isFocus:!this.state.isFocus });
    }

    public render() {
        const hasBorder= this.state.isFocus ? styles.focusBorder : '';
        const skinClass =(this.props.skin=="line") ? styles.line: '';
        const componentClassNames = classNames(styles.component, styles[this.props.size], hasBorder ,this.props.componentClasses, skinClass);
        const label = this.props.label ? this.props.label : '';
        return (
            <div className={componentClassNames}>
                <input ref={input => this.textInput = input}
                        className={styles.input} 
                        type="text" 
                        onBlur={this.handleOnBlur}
                        onFocus={this.handlerFocus} 
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                {this.props.children}
            </div>
        )
    }
}
