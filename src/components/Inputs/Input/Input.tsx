import classNames from 'classnames';
import * as React from 'react';

import { ComponentBaseProperties, PriorityIcon } from '../../../core';
import { Icon } from '../../Icon/Icon';
import styles from './Input.module.scss';

type InputSkin = "box" | "line"
type InputSize = "small" | "medium" | "large";
type InputWidth = "regularFixed" | "fullWidth"

export class InputProperties extends ComponentBaseProperties {
    size?: any;
    width?: InputWidth;
    skin?: InputSkin = "box";
    value?: string;
    placeholder?: string;
    clearable?: boolean;
    inputRef?(ref): void;
    onChange?(value: string): void;
    onFocus?(event): void;
    onBlur?(event): void;
}

interface InputState extends React.ComponentState {
    isFocus?: boolean
}

export class Input extends React.Component<InputProperties, InputState> {

    static defaultProps = {
        width: "regularFixed"
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
        console.log('blur')
        this.setState({ isFocus: false });
        onBlur && onBlur(event);
    }

    public render() {
        const { onBlur, onFocus, onChange, inputRef, skin, size, width = "fullWidth", children, componentClasses, ...restInputProps } = this.props;

        const hasBorder = (this.state && this.state.isFocus) ? styles.focusBorder : '';
        const skinClass = (skin == "line") ? styles.line : '';
        const componentClassNames = classNames(styles.component, styles[size], styles[width], hasBorder, componentClasses, skinClass);

        const clearIcon = this.props.clearable ? <Icon icon={PriorityIcon.closeSmall} iconColor="grey" /> : '';
        const placeholder = this.props.placeholder ? this.props.placeholder : '';

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
