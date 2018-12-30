/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class InputAutoProperties extends ComponentBaseProperties {
    autocomplete?: string;
}
interface InputAutoState extends ComponentBaseState {
}
export default class LineInput extends ComponentBase<InputAutoProperties, InputAutoState> {
    render(): JSX.Element;
}
export {};
