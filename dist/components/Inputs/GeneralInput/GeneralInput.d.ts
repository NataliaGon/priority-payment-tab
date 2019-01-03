/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class GeneralInputProperties extends ComponentBaseProperties {
    inputWidth?: any;
    clearable?: boolean;
    isIcon?: boolean;
    isButton?: boolean;
    iconName?: string;
    defaultVal?: string;
}
interface GeneralInputState extends ComponentBaseState {
    isFocus?: boolean;
}
export declare class GeneralInput extends ComponentBase<GeneralInputProperties, GeneralInputState> {
    state: GeneralInputState;
    HandlerEnter: () => void;
    HandlerMouseLeave: () => void;
    HandlerFocus: () => void;
    HandleOnBlur: () => void;
    render(): JSX.Element;
}
export {};
