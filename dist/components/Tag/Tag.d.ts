/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
interface TagProperties extends ComponentBaseProperties {
}
interface TagState extends ComponentBaseState {
}
export declare class Tag extends ComponentBase<TagProperties, TagState> {
    render(): JSX.Element;
}
export {};
