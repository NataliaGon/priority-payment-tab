/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type LabelSkin = "large" | "regular" | "regular-high-contrast" | "small";
declare type LabelPadding = "regular" | "double";
interface LabelProperties extends ComponentBaseProperties {
    skin?: LabelSkin;
    labelPadding?: LabelPadding;
    textHref?: string;
}
interface LabelState extends ComponentBaseState {
}
export declare class Label extends ComponentBase<LabelProperties, LabelState> {
    render(): JSX.Element;
}
export {};
