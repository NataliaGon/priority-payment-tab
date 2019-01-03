/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
declare class ContainerProperties extends ComponentBaseProperties {
    ContainerWidth?: string;
    alignItems?: AlignItems;
    closable?: boolean;
}
interface ContainerState extends ComponentBaseState {
    isHover?: boolean;
    position?: boolean;
}
export declare class Container extends ComponentBase<ContainerProperties, ContainerState> {
    state: ContainerState;
    static defaultProps: {
        closable: boolean;
    };
    HandlerEnter: () => void;
    HandlerMouseLeave: () => void;
    render(): JSX.Element;
}
export {};
