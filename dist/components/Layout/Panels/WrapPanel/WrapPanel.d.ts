/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
declare type WrapPanelSkin = "default" | "header" | "light" | "dark";
interface WrapPanelProperties extends ComponentBaseProperties {
    skin?: WrapPanelSkin;
}
interface WrapPanelState extends ComponentBaseState {
}
export declare class WrapPanel extends ComponentBase<WrapPanelProperties, WrapPanelState> {
    render(): JSX.Element;
}
export {};
