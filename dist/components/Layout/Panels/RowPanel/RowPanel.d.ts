/// <reference types="react" />
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
declare type AlignItems = "flex-start" | "flex-end" | "space-between";
interface RowPanelProperties extends ComponentBaseProperties {
    alignItems?: AlignItems;
}
interface RowPanelState extends ComponentBaseState {
}
export declare class RowPanel extends ComponentBase<RowPanelProperties, RowPanelState> {
    render(): JSX.Element;
}
export {};
