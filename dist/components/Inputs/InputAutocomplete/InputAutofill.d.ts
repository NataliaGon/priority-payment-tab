/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class InputAutoProperties extends ComponentBaseProperties {
}
interface InputAutoState extends ComponentBaseState {
    value?: any;
}
export declare class AutoFill extends ComponentBase<InputAutoProperties, InputAutoState> {
    state: InputAutoState;
    render(): JSX.Element;
}
export {};
