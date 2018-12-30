/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
import { OptionItem } from "./OptionItem/OptionItem";
export interface SelectProperties extends ComponentBaseProperties {
    multiSelect?: boolean;
    IconTextColor?: string;
}
export interface SelectState extends ComponentBaseState {
    dropDownOptions: OptionItem[];
    isOpen: boolean;
    results: string[];
}
export declare class Select extends ComponentBase<SelectProperties, SelectState> {
    dropDownToggle: () => void;
    renderOptions: () => JSX.Element | null;
    optionSelected(): void;
    render(): JSX.Element;
}
