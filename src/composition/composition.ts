import React from "react";

export interface ComponentProperties { }
export interface ComponentState { }

export class ComponentBaseProperties implements ComponentProperties {
    componentClasses?: string[];
    text?: string;
    draggable?: boolean;
    clickable?: boolean;
}

export class ComponentBaseState implements ComponentState {
}

export class ComponentAnimatedProperties extends ComponentBaseProperties {
    transitionName?: string;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;
}

export class ComponentBase<ComponentProperties, ComponentState> extends React.Component<ComponentProperties, ComponentState, any> {

    constructor(properties: ComponentProperties, state?: ComponentState) {
        super(properties, state);
    }

    focusRef: {
        focus: () => void;
    } | undefined;
}
