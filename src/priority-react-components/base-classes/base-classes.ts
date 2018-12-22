import React from "react";

export type ComponentBaseSkin = "default";

export class ComponentBaseProperties {
    componentClasses?: string[];
    text?: string;
    draggable?: boolean = false;
    skin?: ComponentBaseSkin = "default";
}

export class ComponentAnimatedProperties extends ComponentBaseProperties {
    transitionName?: string;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;
}

export class ComponentBaseState {
}

export class ComponentBase<ComponentBaseProperties, ComponentBaseState> extends React.Component<ComponentBaseProperties, ComponentBaseState, any> {
    constructor(properties: ComponentBaseProperties, state?: ComponentBaseState) {
        super(properties, state);
    }

    focusRef: {
        focus: () => void;
    } | undefined;
}
