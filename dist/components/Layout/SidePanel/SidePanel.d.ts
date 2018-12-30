/// <reference types="react" />
import { ComponentBaseState, ComponentAnimatedProperties, ComponentBase } from '../../../base-classes';
interface SidePanelState extends ComponentBaseState {
    open: boolean;
}
interface SidePanelProperties extends ComponentAnimatedProperties {
    onOpen?(): boolean;
    onClose?(closeCallback: Function): boolean;
    content?(props: InjectedSidePanelProps): JSX.Element;
}
export interface InjectedSidePanelProps {
    open: boolean;
    openPanel(): void;
    closePanel(): void;
    hidePanel(): void;
}
export declare class SidePanel extends ComponentBase<SidePanelProperties, SidePanelState> {
    focusRef: {
        focus: () => void;
    } | undefined;
    constructor(properties: SidePanelProperties);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    escFunction(event: {
        keyCode: number;
    }): void;
    close(): void;
    hide(): void;
    open(): void;
    focus(): void;
    render(): JSX.Element;
}
export {};
