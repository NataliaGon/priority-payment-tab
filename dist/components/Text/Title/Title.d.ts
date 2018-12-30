/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
interface TitleProperties extends ComponentBaseProperties {
}
interface TitleState extends ComponentBaseState {
}
export declare class Title extends ComponentBase<TitleProperties, TitleState> {
    constructor(properties: TitleProperties, state?: TitleState);
    render(): JSX.Element;
}
export {};
