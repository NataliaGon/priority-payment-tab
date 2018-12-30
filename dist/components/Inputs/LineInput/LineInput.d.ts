/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
declare class LineInputProperties extends ComponentBaseProperties {
}
interface LineInputState extends ComponentBaseState {
    showInput: boolean;
}
export declare class LineInput extends ComponentBase<LineInputProperties, LineInputState> {
    constructor(properties: LineInputProperties, state: LineInputState);
    SpanInpitToggle: () => void;
    render(): JSX.Element;
}
export {};
