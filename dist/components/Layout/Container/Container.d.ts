/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type AlignItems = "flexStart" | "flexEnd" | "spaceBetween";
declare class ContainerProperties extends ComponentBaseProperties {
    width?: string;
    alignItems?: AlignItems;
}
interface ContainerState extends ComponentBaseState {
}
export declare class Container extends ComponentBase<ContainerProperties, ContainerState> {
    render(): JSX.Element;
}
export {};
