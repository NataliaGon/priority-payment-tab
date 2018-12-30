/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";
interface IconCounterProperties extends ComponentBaseProperties {
    count?: number;
}
interface IconCounterState extends ComponentBaseState {
}
export default class IconCounter extends ComponentBase<IconCounterProperties, IconCounterState> {
    render(): JSX.Element | null;
}
export {};
