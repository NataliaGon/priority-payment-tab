/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type ButtonSkin = "regular" | "stroke" | "roundStrokeIcon";
declare type ButtonWidth = "regularFixed" | "fullWidth" | "ccontentWidth";
interface ButtonProperties extends ComponentBaseProperties {
    skin?: ButtonSkin;
    width?: ButtonWidth;
    onClick?: () => void;
}
interface ButtonState extends ComponentBaseState {
}
export declare class Button extends ComponentBase<ButtonProperties, ButtonState> {
    render(): JSX.Element;
}
export {};
