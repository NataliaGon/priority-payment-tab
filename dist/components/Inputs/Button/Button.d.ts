/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare type ButtonSkin = "regular" | "stroke" | "roundStrokeIcon" | "secondary";
declare type ButtonWidth = "regularFixed" | "fullWidth" | "ccontentWidth" | "small";
interface ButtonProperties extends ComponentBaseProperties {
    skin?: ButtonSkin;
    width?: ButtonWidth;
    disabled?: boolean;
}
interface ButtonState extends ComponentBaseState {
    isActive?: boolean;
}
export declare class Button extends ComponentBase<ButtonProperties, ButtonState> {
    state: ButtonState;
    clickHandler: () => void;
    render(): JSX.Element;
}
export {};
