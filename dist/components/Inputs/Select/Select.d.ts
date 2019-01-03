/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type selectWidth = "small" | "medium" | "large";
export interface SelectProperties extends ComponentBaseProperties {
    multiSelect?: boolean;
    IconTextColor?: string;
    options: any[];
    width?: selectWidth;
}
export interface SelectState extends ComponentBaseState {
    isOpen: boolean;
    results: string[];
}
export declare class Select extends ComponentBase<SelectProperties, SelectState> {
    state: SelectState;
    dropDownToggle: () => void;
    renderOptions: () => JSX.Element | null;
    optionSelected(): void;
    render(): JSX.Element;
}
export {};
