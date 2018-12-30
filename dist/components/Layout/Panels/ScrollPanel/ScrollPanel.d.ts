/// <reference types="react" />
import { Scrollbars } from 'react-custom-scrollbars';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";
interface ScrollPanelProperties extends ComponentBaseProperties {
    gradient?: boolean;
    autoHeight?: boolean;
    autoHeightMax?: number;
    autoHeightMin?: number;
    className?: string;
}
interface ScrollPanelState extends ComponentBaseState {
    scrolledToEnd: boolean;
}
export declare class ScrollPanel extends ComponentBase<ScrollPanelProperties, ScrollPanelState> {
    scrollbar: Scrollbars;
    constructor(props: ScrollPanelProperties);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    checkScroll(): void;
    render(): JSX.Element;
}
export {};
