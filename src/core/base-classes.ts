import * as React from 'react';

export type ComponentBaseSkin = "default";
export type TextSize = "large" | "medium" | "regular" | "small";
export type TextColor = "black" | "grey" | "blue" | "white" | "dark";
export type IconColor = TextColor | "";
export type FontFamily = "regular" | "serif" | "icons";
export type TextDirection = "ltr" | "rtl";

export interface DefaultTextProperties {
    textSize: TextSize;
    textColor: TextColor;
    fontFamily: FontFamily;
}

export interface ComponentBaseProperties {
    componentClasses?: string[] | string;
    text?: string;
    textSize?: TextSize;
    textColor?: TextColor;
    rtl?: boolean
}

export interface InputBaseProperties extends ComponentBaseProperties {
    onFocus?(event?): void;
    onBlur?(event?): void;
    tabIndex?: number;
}

export class ComponentBase<ComponentBaseProperties> extends React.Component<ComponentBaseProperties, any> {

    constructor(properties: ComponentBaseProperties, state?: any) {
        super(properties, state);
    }

    focusRef: {
        focus: () => void;
    } | undefined;
}

export interface ComponentAnimatedProperties extends ComponentBaseProperties {
    transitionName?: string;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;
}

export interface ActiveProperty {
    active?: boolean
}
