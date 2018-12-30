/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
interface OptionItemProperties extends ComponentBaseProperties {
    iconName?: string;
    value?: any;
    displayValue?: boolean;
    onClick?: (e: any) => void;
}
interface OptionItemState extends ComponentBaseState {
    selected?: boolean;
}
export declare class OptionItem extends ComponentBase<OptionItemProperties, OptionItemState> {
    render(): JSX.Element;
}
export {};
