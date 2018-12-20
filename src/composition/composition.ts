import React from "react";

export interface ComponentProperties { }
export interface ComponentState { }

export class ComponentBaseProperties implements ComponentProperties {
    componentClasses?: string[];
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
}
