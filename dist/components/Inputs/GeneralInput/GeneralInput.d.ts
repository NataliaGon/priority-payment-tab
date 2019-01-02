/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class GeneralInputProperties extends ComponentBaseProperties {
    inputWidth?: any;
    clearable?: boolean;
}
interface GeneralInputState extends ComponentBaseState {
    isButton?: boolean;
    isFocus?: boolean;
}
export declare class GeneralInput extends ComponentBase<GeneralInputProperties, GeneralInputState> {
    state: GeneralInputState;
    HandlerEnter: () => void;
    HandlerMouseLeave: () => void;
    HandlerFocus: () => void;
    render(): JSX.Element;
}
export {};
