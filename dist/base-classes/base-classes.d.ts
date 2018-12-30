import * as React from "react";
export declare type ComponentBaseSkin = "default";
export declare type TextSize = "large" | "medium" | "regular" | "small";
export declare type TextColor = "black" | "grey" | "blue" | "white";
export declare type IconColor = TextColor | "";
export declare type FontFamily = "regular" | "serif" | "icons";
export declare class DefaultTextProperties {
    textSize: TextSize;
    textColor: TextColor;
    fontFamily: FontFamily;
}
export declare class ComponentBaseProperties {
    componentClasses?: string[];
    text?: string;
    textSize?: TextSize;
    textColor?: TextColor;
    fontFamily?: FontFamily;
    draggable?: boolean;
}
export declare class ComponentBaseState {
}
export declare class ComponentBase<ComponentBaseProperties, ComponentBaseState> extends React.Component<ComponentBaseProperties, ComponentBaseState, any> {
    constructor(properties: ComponentBaseProperties, state?: ComponentBaseState);
    focusRef: {
        focus: () => void;
    } | undefined;
    protected defaultProperties: () => any;
}
export declare class ComponentAnimatedProperties extends ComponentBaseProperties {
    transitionName?: string;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;
}
