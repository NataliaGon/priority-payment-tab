/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class CheckBoxProperties extends ComponentBaseProperties {
}
interface CheckBoxState extends ComponentBaseState {
    checked?: boolean;
}
export declare class CheckBox extends ComponentBase<CheckBoxProperties, CheckBoxState> {
    state: {
        checked: boolean;
    };
    render(): JSX.Element;
}
export {};
