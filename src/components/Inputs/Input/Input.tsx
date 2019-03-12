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
    direction?: 'ltr' | 'rtl';
    inputRef?(ref): void;
    onChange?(event): void;
    /** use to return focus to input after clicking on children */
    returnFocus?: boolean;
    focusOnMount?: boolean;
}

interface InputState extends React.ComponentState {
    isFocus?: boolean
}

export class Input extends React.Component<InputProperties, InputState> {

    input;

    static defaultProps = {
        width: "regularFixed",
        skin: "box",
        size: "medium",
        returnFocus: true
    }

    componentDidMount() {
        const { focusOnMount } = this.props;
        focusOnMount && this.input.focus();
    }

    handleMouseUp = () => {
        const { returnFocus } = this.props; 
        !this.input.isFocused && returnFocus && this.input.focus();
    }

    handleRef = (ref) => {
        this.input = ref;
        const { inputRef } = this.props;
        inputRef && inputRef(ref);
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
        const { onBlur, onFocus, onChange, inputRef, skin, size, width, direction, children, componentClasses, returnFocus, focusOnMount, ...restInputProps } = this.props;

        const hasBorder = (this.state && this.state.isFocus) ? styles.focusBorder : '';
        const componentClassNames = classNames(styles.component, skin && styles[skin], size && styles[size], width && styles[width], direction && styles[direction], hasBorder, componentClasses);

        return (
            <div className={componentClassNames} onMouseUp={this.handleMouseUp}>
                <input ref={this.handleRef}
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
