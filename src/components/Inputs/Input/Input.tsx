import classNames from 'classnames';
import * as React from 'react';

import { ComponentBaseProperties } from '../../../core';
import styles from './Input.module.scss';

type InputSkin = "box" | "line"
type InputSize = "small" | "medium" | "large";
type InputWidth = "regularFixed" | "fullWidth"

export class InputProperties extends ComponentBaseProperties {
    size?: InputSize;
    width?: InputWidth;
    skin?: InputSkin;
    value?: string;
    placeholder?: string;
    /** use to force a different direction that the inherited one */
    direction?: 'ltr' | 'rtl';
    inputRef?(ref): void;
    onChange?(event): void;
    onFocus?(event): void;
    onBlur?(event): void;
}

interface InputState extends React.ComponentState {
    isFocus?: boolean
}

export class Input extends React.Component<InputProperties, InputState> {

    static defaultProps = {
        width: "regularFixed",
        skin: "box",
        size: "medium"
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
        const { onBlur, onFocus, onChange, inputRef, skin, size, width, direction, children, componentClasses, ...restInputProps } = this.props;

        const hasBorder = (this.state && this.state.isFocus) ? styles.focusBorder : '';
        const componentClassNames = classNames(styles.component, skin && styles[skin], size && styles[size], width && styles[width], direction && styles[direction], hasBorder, componentClasses);

        return (
            <div className={componentClassNames}>
                <input ref={inputRef}
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
