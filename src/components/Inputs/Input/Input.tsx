import classNames from 'classnames';
import * as React from 'react';

import { InputBaseProperties } from '../../../core';
import styles from './Input.module.scss';

type InputSkin = "box" | "line"
type InputSize = "small" | "medium" | "large";
type InputWidth = "regularFixed" | "fullWidth";

export interface InputProperties extends InputBaseProperties {
    size?: InputSize;
    width?: InputWidth;
    skin?: InputSkin;
    value?: string;
    placeholder?: string;
    /** use to force a different direction that the inherited one */
    direction?: 'ltr' | 'rtl' | 'auto';
    onChange?(event): void;
    /** use to return focus to input after clicking on children */
    returnFocus?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>
}

interface InputState extends React.ComponentState {
    isFocus?: boolean
}

export class Input extends React.Component<InputProperties, InputState> {

    inputRef;

    static defaultProps = {
        width: "regularFixed",
        skin: "box",
        size: "medium",
        returnFocus: true
    }

    constructor(props) {
        super(props);
        this.state = {
            isFocus: false
        }
        this.inputRef = props.inputRef || React.createRef();
    }

    handleMouseUp = () => {
        const { returnFocus } = this.props; 
        !this.inputRef.current.isFocused && returnFocus && this.inputRef.current.focus();
    }

    handleChange = (event) => {
        const { onChange } = this.props;
        onChange && onChange(event);
    }

    handleFocus = (event) => {
        const { onFocus } = this.props;
        this.setState({ isFocus: true });
        onFocus && onFocus(event);
    }

    handleOnBlur = (event) => {
        const { onBlur } = this.props;
        this.setState({ isFocus: false });
        onBlur && onBlur(event);
    }

    public render() {
        const { onBlur, onFocus, onChange, inputRef, skin, size, width, direction, children, componentClasses, returnFocus, value, ...restInputProps } = this.props;

        const componentClassNames = classNames(styles.component,
            skin && styles[skin],
            size && styles[size],
            width && styles[width],
            direction && styles[direction], {
                [styles.focusBorder]: this.state.isFocus,
                [styles.noValue]: value === ''
            },
            componentClasses);

        return (
            <div className={componentClassNames} onMouseUp={this.handleMouseUp}>
                <input ref={this.inputRef}
                    dir={direction}
                    value={value}
                    className={styles.input}
                    type="text"
                    onBlur={this.handleOnBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    {...restInputProps}
                />
                {this.props.children}
            </div>
        )
    }
}