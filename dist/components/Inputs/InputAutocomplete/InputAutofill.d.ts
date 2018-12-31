/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class InputAutoProperties extends ComponentBaseProperties {
}
interface InputAutoState extends ComponentBaseState {
    value?: string;
}
export declare class AutoFill extends ComponentBase<InputAutoProperties, InputAutoState> {
    render(): JSX.Element;
}
export {};
