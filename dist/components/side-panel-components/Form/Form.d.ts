/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../../base-classes';
declare class FormProperties extends ComponentBaseProperties {
}
interface FormState extends ComponentBaseState {
}
export declare class Form extends ComponentBase<FormProperties, FormState> {
    render(): JSX.Element;
}
export {};
