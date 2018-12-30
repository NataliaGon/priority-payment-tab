/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
declare type StackPanelSkin = "default" | "silver" | "light" | "dark" | "padded-panel";
declare class StackPanelProperties extends ComponentBaseProperties {
    skin?: StackPanelSkin;
    className?: string;
}
interface StackPanelState extends ComponentBaseState {
}
export declare class StackPanel extends ComponentBase<StackPanelProperties, StackPanelState> {
    render(): JSX.Element;
}
export {};
