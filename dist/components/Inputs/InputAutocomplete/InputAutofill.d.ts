/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class InputAutoProperties extends ComponentBaseProperties {
    autocomplete?: string;
}
interface InputAutoState extends ComponentBaseState {
}
export declare class AutoFill extends ComponentBase<InputAutoProperties, InputAutoState> {
    render(): JSX.Element;
}
export {};
