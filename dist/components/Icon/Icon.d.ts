/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, IconColor } from "../../base-classes";
import { PriorityIcon } from "../../base-classes/PriorityIcon";
interface IconProperties extends ComponentBaseProperties {
    icon?: PriorityIcon;
    iconColor?: IconColor;
    counterValue?: number;
}
interface IconState extends ComponentBaseState {
    counterValue?: number;
}
export declare class Icon extends ComponentBase<IconProperties, IconState> {
    constructor(properties: IconProperties, state: IconState);
    render(): JSX.Element;
}
export {};
