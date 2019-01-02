/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor } from "../../base-classes";
import { PriorityIcon } from "../../base-classes/PriorityIcon";
interface IconProperties extends ComponentBaseProperties {
    icon?: PriorityIcon;
    iconColor?: IconColor;
    counterValue?: number;
    visibility?: boolean;
    position?: boolean;
}
interface IconState extends ComponentBaseState {
    counterValue?: number;
}
export declare class Icon extends ComponentBase<IconProperties, IconState> {
    constructor(properties: IconProperties, state: IconState);
    static defaultProps: {
        visibility: boolean;
        position: boolean;
    };
    render(): JSX.Element;
}
export {};
